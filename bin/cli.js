#!/usr/bin/env node

/**
 * Universal Multi-Agent Installer CLI
 * UI/UX & Dashboard Design Skills Suite
 * Author: Sorabh Gwala (@sorabhgwala)
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SKILLS_DIR = path.join(ROOT_DIR, 'skills');
const AGENTS_FILE = path.join(ROOT_DIR, 'AGENTS.md');

// Parse CLI Arguments
const args = process.argv.slice(2);
let targetDir = process.cwd();
let agent = 'all';

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '--target' || arg === '-t') {
    targetDir = path.resolve(args[++i]);
  } else if (arg === '--agent' || arg === '-a') {
    agent = args[++i];
  } else if (arg === '--list' || arg === '-l') {
    listSkills();
    process.exit(0);
  } else if (arg === '--help' || arg === '-h') {
    showHelp();
    process.exit(0);
  }
}

function showHelp() {
  console.log(`
🎨 Universal UI/UX & Dashboard Design Skills Suite
Author: Sorabh Gwala (@sorabhgwala)

Usage:
  npx @sorabhgwala/ui-ux-dashboard-skills [options]

Options:
  --target, -t <path>    Target directory to install into (default: current directory)
  --agent,  -a <agent>   Target specific agent: all, claude, gemini, cursor, copilot (default: all)
  --list,   -l           List all included skills and documentation
  --help,   -h           Show this help message

Examples:
  npx @sorabhgwala/ui-ux-dashboard-skills
  npx @sorabhgwala/ui-ux-dashboard-skills --target ./my-app
  npx @sorabhgwala/ui-ux-dashboard-skills --agent cursor
`);
}

function listSkills() {
  console.log('\n📦 Available Skills in this Suite:\n');
  const skills = fs.readdirSync(SKILLS_DIR).filter((f) => fs.statSync(path.join(SKILLS_DIR, f)).isDirectory());
  for (const s of skills) {
    const skillMd = path.join(SKILLS_DIR, s, 'SKILL.md');
    let desc = 'No description';
    if (fs.existsSync(skillMd)) {
      const content = fs.readFileSync(skillMd, 'utf8');
      const match = content.match(/description:\s*([^\r\n]+)/);
      if (match) desc = match[1].replace(/["']/g, '');
    }
    console.log(`  • \x1b[36m${s}\x1b[0m: ${desc}`);
  }
  console.log('');
}

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installSkillsFolder(destDir) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  const skills = fs.readdirSync(SKILLS_DIR).filter((f) => fs.statSync(path.join(SKILLS_DIR, f)).isDirectory());
  for (const s of skills) {
    const src = path.join(SKILLS_DIR, s);
    const dest = path.join(destDir, s);
    copyDirRecursive(src, dest);
    console.log(`    \x1b[32m✓\x1b[0m Installed skill: ${s}`);
  }
}

function main() {
  console.log(`\n\x1b[36m=== UI/UX & Dashboard Design Skills Installer ===\x1b[0m`);
  console.log(`Target: \x1b[33m${targetDir}\x1b[0m\n`);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 1. Copy AGENTS.md router to target root
  const destAgents = path.join(targetDir, 'AGENTS.md');
  if (!fs.existsSync(destAgents)) {
    fs.copyFileSync(AGENTS_FILE, destAgents);
    console.log(`\x1b[32m[✓]\x1b[0m Created root AGENTS.md router`);
  } else {
    console.log(`\x1b[90m[i] AGENTS.md already present in target root\x1b[0m`);
  }

  // 2. Configure for Claude Code
  if (agent === 'all' || agent === 'claude') {
    console.log(`\n[+] Configuring for Claude Code (.claude/skills/)...`);
    installSkillsFolder(path.join(targetDir, '.claude', 'skills'));

    const claudeFile = path.join(targetDir, 'CLAUDE.md');
    const claudeEntry = `\n\n<!-- UI/UX Design Suite Directive -->\n@AGENTS.md`;
    if (fs.existsSync(claudeFile)) {
      const content = fs.readFileSync(claudeFile, 'utf8');
      if (!content.includes('AGENTS.md')) {
        fs.appendFileSync(claudeFile, claudeEntry);
        console.log(`\x1b[32m[✓]\x1b[0m Linked AGENTS.md in CLAUDE.md`);
      }
    } else {
      fs.writeFileSync(claudeFile, `# Claude Code Configuration${claudeEntry}`);
      console.log(`\x1b[32m[✓]\x1b[0m Created CLAUDE.md referencing AGENTS.md`);
    }
  }

  // 3. Configure for Antigravity & Gemini CLI
  if (agent === 'all' || agent === 'gemini') {
    console.log(`\n[+] Configuring for Google Antigravity & Gemini CLI (.gemini/skills/ & .agent/skills/)...`);
    installSkillsFolder(path.join(targetDir, '.gemini', 'skills'));
    installSkillsFolder(path.join(targetDir, '.agent', 'skills'));
  }

  // 4. Configure for Cursor / Windsurf
  if (agent === 'all' || agent === 'cursor' || agent === 'windsurf') {
    console.log(`\n[+] Configuring for Cursor (.cursor/rules/)...`);
    const cursorRulesDir = path.join(targetDir, '.cursor', 'rules');
    if (!fs.existsSync(cursorRulesDir)) {
      fs.mkdirSync(cursorRulesDir, { recursive: true });
    }
    const ruleContent = `---
description: Universal UI/UX, Anti-Slop, and Dashboard Design Rules
globs: **/*.{tsx,jsx,vue,svelte,html,css,ts,js}
---

# UI/UX & Dashboard Design System Rules

Follow the 7 Non-Negotiable Golden Rules from AGENTS.md:
1. BAN generic AI 3-column equal-width feature card grids. Use asymmetrical bento grids or real UI mocks.
2. Dashboards must answer primary questions within 3 seconds (First Glance Rule).
3. Wordless Data Principle: Zero explanatory sentences outside tooltips.
4. Data Honesty: Never calculate percentages on bases < 5 (write 'was 1'). Invert polarity for lower-is-better metrics.
5. Never write 'outline: none' without ':focus-visible:ring-*' replacement.
6. Never block paste in form inputs.
7. Never write 'transition: all'; animate only 'transform' and 'opacity' on the GPU compositor.

Skills Reference: Check AGENTS.md and .claude/skills/ or .agent/skills/ for complete guidelines.
`;
    fs.writeFileSync(path.join(cursorRulesDir, 'ui-ux-design-suite.mdc'), ruleContent);
    console.log(`\x1b[32m[✓]\x1b[0m Created .cursor/rules/ui-ux-design-suite.mdc`);
  }

  // 5. Configure for GitHub Copilot
  if (agent === 'all' || agent === 'copilot') {
    console.log(`\n[+] Configuring for GitHub Copilot (.github/copilot-instructions.md)...`);
    const githubDir = path.join(targetDir, '.github');
    if (!fs.existsSync(githubDir)) {
      fs.mkdirSync(githubDir, { recursive: true });
    }
    const copilotFile = path.join(githubDir, 'copilot-instructions.md');
    const copilotEntry = `\n\n<!-- UI/UX Design System -->\nFollow the frontend architecture, anti-slop rules, and dashboard design guidelines specified in AGENTS.md.\n`;
    if (fs.existsSync(copilotFile)) {
      const content = fs.readFileSync(copilotFile, 'utf8');
      if (!content.includes('AGENTS.md')) {
        fs.appendFileSync(copilotFile, copilotEntry);
        console.log(`\x1b[32m[✓]\x1b[0m Appended AGENTS.md instructions to copilot-instructions.md`);
      }
    } else {
      fs.writeFileSync(copilotFile, `# GitHub Copilot Instructions${copilotEntry}`);
      console.log(`\x1b[32m[✓]\x1b[0m Created .github/copilot-instructions.md`);
    }
  }

  console.log(`\n\x1b[32m=== Installation Complete! ===\x1b[0m`);
  console.log(`Any agent in \x1b[33m${targetDir}\x1b[0m now uses senior UI/UX and dashboard design intelligence.\n`);
}

main();
