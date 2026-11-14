#!/usr/bin/env node

/**
 * Validates all SKILL.md files against the open Agent Skills specification (agentskills.io).
 */

const fs = require('fs');
const path = require('path');

const SKILLS_DIR = path.resolve(__dirname, '..', 'skills');

let failures = 0;
let passed = 0;

console.log('🔍 Validating Agent Skills Specification...\n');

const skills = fs.readdirSync(SKILLS_DIR).filter((f) => fs.statSync(path.join(SKILLS_DIR, f)).isDirectory());

for (const skill of skills) {
  const skillFile = path.join(SKILLS_DIR, skill, 'SKILL.md');
  if (!fs.existsSync(skillFile)) {
    console.error(`❌ [FAIL] Missing SKILL.md in: skills/${skill}`);
    failures++;
    continue;
  }

  const content = fs.readFileSync(skillFile, 'utf8');
  const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);

  if (!frontmatterMatch) {
    console.error(`❌ [FAIL] Missing YAML frontmatter in: skills/${skill}/SKILL.md`);
    failures++;
    continue;
  }

  const frontmatter = frontmatterMatch[1];
  const hasName = frontmatter.match(/name:\s*([^\r\n]+)/);
  const hasDesc = frontmatter.match(/description:\s*([^\r\n]+)/);

  if (!hasName) {
    console.error(`❌ [FAIL] Missing 'name' in frontmatter: skills/${skill}/SKILL.md`);
    failures++;
    continue;
  }

  if (!hasDesc) {
    console.error(`❌ [FAIL] Missing 'description' in frontmatter: skills/${skill}/SKILL.md`);
    failures++;
    continue;
  }

  if (frontmatter.length > 1024) {
    console.error(`❌ [FAIL] Frontmatter exceeds 1024 characters (${frontmatter.length} chars): skills/${skill}/SKILL.md`);
    failures++;
    continue;
  }

  console.log(`✅ [PASS] skills/${skill} (name: ${hasName[1].trim()}, length: ${frontmatter.length} chars)`);
  passed++;
}

console.log(`\nResults: ${passed} passed, ${failures} failed.`);

if (failures > 0) {
  process.exit(1);
} else {
  console.log('🎉 All skills strictly conform to the Agent Skills specification!\n');
  process.exit(0);
}
