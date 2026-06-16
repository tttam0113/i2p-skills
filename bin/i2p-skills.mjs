#!/usr/bin/env node

import { cp, mkdir, readdir, rm, stat } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const validTargets = new Set(["codex", "claude", "all"]);

function usage() {
  return `Usage:
  i2p-skills install --target codex [--dest <path>] [--force] [--dry-run]
  i2p-skills install --target claude [--dest <path>] [--force] [--dry-run]
  i2p-skills install --target all [--force] [--dry-run]

Options:
  --target <target>  codex, claude, or all. Defaults to all.
  --dest <path>     Custom destination. Only valid with codex or claude.
  --force           Overwrite existing i2p skill folders.
  --dry-run         Print planned copies without writing files.
  --help            Print this help.
`;
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exitCode = 1;
}

function parseArgs(args) {
  const options = {
    command: undefined,
    target: "all",
    dest: undefined,
    force: false,
    dryRun: false,
    help: false,
  };

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--help" || arg === "-h") {
      options.help = true;
    } else if (!options.command && !arg.startsWith("-")) {
      options.command = arg;
    } else if (arg === "--target") {
      options.target = readOptionValue(args, index, "--target");
      index += 1;
    } else if (arg === "--dest") {
      options.dest = readOptionValue(args, index, "--dest");
      index += 1;
    } else if (arg === "--force") {
      options.force = true;
    } else if (arg === "--dry-run") {
      options.dryRun = true;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }

  return options;
}

function readOptionValue(args, index, flag) {
  const value = args[index + 1];
  if (!value || value.startsWith("-")) {
    throw new Error(`${flag} requires a value.`);
  }
  return value;
}

function platformConfig(target, customDest) {
  if (target === "codex") {
    return {
      label: "Codex",
      source: path.join(packageRoot, "skills", "codex"),
      dest:
        customDest ??
        path.join(process.env.CODEX_HOME ?? path.join(os.homedir(), ".codex"), "skills"),
    };
  }

  if (target === "claude") {
    return {
      label: "Claude",
      source: path.join(packageRoot, "skills", "claude"),
      dest:
        customDest ??
        path.join(process.env.CLAUDE_HOME ?? path.join(os.homedir(), ".claude"), "skills"),
    };
  }

  throw new Error(`Unsupported target: ${target}`);
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch (error) {
    if (error?.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function listSkillFolders(sourceDir) {
  if (!(await pathExists(sourceDir))) {
    throw new Error(`Source skill directory does not exist: ${sourceDir}`);
  }

  const entries = await readdir(sourceDir, { withFileTypes: true });
  const skills = entries
    .filter((entry) => entry.isDirectory() && entry.name.startsWith("i2p-"))
    .map((entry) => entry.name)
    .sort();

  if (skills.length === 0) {
    throw new Error(`No i2p skill folders found in: ${sourceDir}`);
  }

  return skills;
}

async function installTarget(config, options) {
  const skills = await listSkillFolders(config.source);

  if (options.dryRun) {
    process.stdout.write(`[dry-run] ${config.label}: ${config.source} -> ${config.dest}\n`);
    for (const skill of skills) {
      process.stdout.write(`[dry-run] copy ${skill}\n`);
    }
    return skills.length;
  }

  await mkdir(config.dest, { recursive: true });

  for (const skill of skills) {
    const from = path.join(config.source, skill);
    const to = path.join(config.dest, skill);
    const exists = await pathExists(to);

    if (exists && !options.force) {
      throw new Error(
        `${to} already exists. Re-run with --force to overwrite installed skills.`,
      );
    }

    if (exists) {
      await rm(to, { recursive: true, force: true });
    }

    await cp(from, to, { recursive: true });
    process.stdout.write(`Copied ${skill} to ${to}\n`);
  }

  process.stdout.write(`Installed ${skills.length} skills for ${config.label}.\n`);
  return skills.length;
}

async function main(args) {
  let options;
  try {
    options = parseArgs(args);
  } catch (error) {
    fail(`${error.message}\n\n${usage()}`);
    return;
  }

  if (options.help) {
    process.stdout.write(usage());
    return;
  }

  if (!options.command) {
    fail(`Missing command.\n\n${usage()}`);
    return;
  }

  if (options.command !== "install") {
    fail(`Unknown command: ${options.command}\n\n${usage()}`);
    return;
  }

  if (!validTargets.has(options.target)) {
    fail(`Invalid --target: ${options.target}. Use codex, claude, or all.`);
    return;
  }

  if (options.target === "all" && options.dest) {
    fail("--dest can only be used with --target codex or --target claude.");
    return;
  }

  const targets =
    options.target === "all" ? ["codex", "claude"] : [options.target];

  try {
    let total = 0;
    for (const target of targets) {
      total += await installTarget(platformConfig(target, options.dest), options);
    }

    if (!options.dryRun) {
      process.stdout.write(
        `Installed ${total} total skills. Restart Codex or Claude to pick up new skills.\n`,
      );
    }
  } catch (error) {
    fail(error.message);
  }
}

await main(process.argv.slice(2));
