import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";
import test from "node:test";

const execFileAsync = promisify(execFile);
const rootDir = path.resolve(import.meta.dirname, "..");
const cliPath = path.join(rootDir, "bin", "i2p-skills.mjs");

async function runCli(args, options = {}) {
  try {
    const result = await execFileAsync(process.execPath, [cliPath, ...args], {
      cwd: rootDir,
      ...options,
    });
    return { code: 0, stdout: result.stdout, stderr: result.stderr };
  } catch (error) {
    return {
      code: error.code ?? 1,
      stdout: error.stdout ?? "",
      stderr: error.stderr ?? "",
    };
  }
}

async function withTempDir(fn) {
  const dir = await mkdtemp(path.join(tmpdir(), "i2p-skills-test-"));
  try {
    return await fn(dir);
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
}

test("--help prints usage", async () => {
  const result = await runCli(["--help"]);

  assert.equal(result.code, 0);
  assert.match(result.stdout, /Usage:/);
  assert.match(result.stdout, /install --target codex/);
});

test("codex dry-run lists all skill folders without writing files", async () => {
  await withTempDir(async (dest) => {
    const result = await runCli([
      "install",
      "--target",
      "codex",
      "--dest",
      dest,
      "--dry-run",
    ]);

    assert.equal(result.code, 0);
    assert.match(result.stdout, /\[dry-run\]/);
    assert.match(result.stdout, /i2p-brief/);
    assert.match(result.stdout, /i2p-roadmap/);
    assert.match(result.stdout, /i2p-spec/);
    assert.match(result.stdout, /i2p-progress/);
    assert.match(result.stdout, /i2p-style/);
    assert.deepEqual(await readdir(dest), []);
  });
});

test("claude install copies all skill folders", async () => {
  await withTempDir(async (dest) => {
    const result = await runCli([
      "install",
      "--target",
      "claude",
      "--dest",
      dest,
    ]);

    assert.equal(result.code, 0);
    const installed = await readdir(dest);
    assert.deepEqual(installed.sort(), [
      "i2p-brief",
      "i2p-progress",
      "i2p-roadmap",
      "i2p-spec",
      "i2p-style",
    ]);

    const skill = await readFile(
      path.join(dest, "i2p-brief", "SKILL.md"),
      "utf8",
    );
    assert.match(skill, /name: i2p-brief/);
  });
});

test("install refuses to overwrite existing skills without --force", async () => {
  await withTempDir(async (dest) => {
    const first = await runCli([
      "install",
      "--target",
      "claude",
      "--dest",
      dest,
    ]);
    const second = await runCli([
      "install",
      "--target",
      "claude",
      "--dest",
      dest,
    ]);

    assert.equal(first.code, 0);
    assert.notEqual(second.code, 0);
    assert.match(second.stderr, /already exists/);
    assert.match(second.stderr, /--force/);
  });
});

test("install overwrites existing skills with --force", async () => {
  await withTempDir(async (dest) => {
    const first = await runCli([
      "install",
      "--target",
      "claude",
      "--dest",
      dest,
    ]);
    const second = await runCli([
      "install",
      "--target",
      "claude",
      "--dest",
      dest,
      "--force",
    ]);

    assert.equal(first.code, 0);
    assert.equal(second.code, 0);
    assert.match(second.stdout, /Installed 5 skills/);
  });
});

test("--target all rejects a single custom --dest", async () => {
  await withTempDir(async (dest) => {
    const result = await runCli(["install", "--target", "all", "--dest", dest]);

    assert.notEqual(result.code, 0);
    assert.match(result.stderr, /--dest can only be used/);
  });
});
