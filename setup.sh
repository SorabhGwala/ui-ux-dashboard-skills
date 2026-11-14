#!/usr/bin/env bash
# Universal Multi-Agent Installer & Linker for UI/UX & Dashboard Design Skills
# Supports Claude Code, Google Antigravity, Cursor, Copilot, and Codex.

set -euo pipefail

TARGET_DIR=""
AGENT="all"
MODE="copy"

usage() {
  echo "Usage: $0 --target <path> [--agent <all|claude|gemini|cursor|copilot|windsurf>] [--mode <copy|symlink>]"
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --target|-t)
      TARGET_DIR="$2"
      shift 2
      ;;
    --agent|-a)
      AGENT="$2"
      shift 2
      ;;
    --mode|-m)
      MODE="$2"
      shift 2
      ;;
    *)
      usage
      ;;
  esac
done

if [[ -z "$TARGET_DIR" ]]; then
  echo "Error: Target directory is required."
  usage
fi

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS_SRC="$SCRIPT_DIR/skills"
AGENTS_SRC="$SCRIPT_DIR/AGENTS.md"

mkdir -p "$TARGET_DIR"
TARGET_DIR="$(cd "$TARGET_DIR" && pwd)"

echo "=== Setting up UI/UX & Dashboard Design Skills in: $TARGET_DIR ==="

# 1. Install AGENTS.md in Target Root
if [[ ! -f "$TARGET_DIR/AGENTS.md" ]]; then
  cp "$AGENTS_SRC" "$TARGET_DIR/AGENTS.md"
  echo "[✓] Created root AGENTS.md router"
else
  echo "[i] AGENTS.md already exists in target; skipping overwrite"
fi

install_skills() {
  local dest="$1"
  mkdir -p "$dest"
  for skill in "$SKILLS_SRC"/*; do
    if [[ -d "$skill" ]]; then
      local skill_name
      skill_name="$(basename "$skill")"
      local target_skill="$dest/$skill_name"
      if [[ "$MODE" == "symlink" ]]; then
        rm -rf "$target_skill"
        ln -sf "$skill" "$target_skill"
        echo "    Linked skill: $skill_name"
      else
        if [[ ! -d "$target_skill" ]]; then
          cp -r "$skill" "$target_skill"
          echo "    Copied skill: $skill_name"
        else
          echo "    Skill already present: $skill_name"
        fi
      fi
    fi
  done
}

# 2. Configure for Claude Code
if [[ "$AGENT" == "all" || "$AGENT" == "claude" ]]; then
  echo -e "\n[+] Configuring for Claude Code (.claude/skills/)..."
  install_skills "$TARGET_DIR/.claude/skills"
  
  CLAUDE_FILE="$TARGET_DIR/CLAUDE.md"
  CLAUDE_ENTRY=$'\n\n<!-- UI/UX Design Suite Directive -->\n@AGENTS.md'
  if [[ -f "$CLAUDE_FILE" ]]; then
    if ! grep -q "AGENTS.md" "$CLAUDE_FILE"; then
      echo "$CLAUDE_ENTRY" >> "$CLAUDE_FILE"
      echo "[✓] Linked AGENTS.md in CLAUDE.md"
    fi
  else
    echo "# Claude Code Configuration$CLAUDE_ENTRY" > "$CLAUDE_FILE"
    echo "[✓] Created CLAUDE.md referencing AGENTS.md"
  fi
fi

# 3. Configure for Antigravity & Gemini CLI
if [[ "$AGENT" == "all" || "$AGENT" == "gemini" ]]; then
  echo -e "\n[+] Configuring for Antigravity & Gemini CLI (.gemini/skills/ & .agent/skills/)..."
  install_skills "$TARGET_DIR/.gemini/skills"
  install_skills "$TARGET_DIR/.agent/skills"
fi

# 4. Configure for Cursor / Windsurf
if [[ "$AGENT" == "all" || "$AGENT" == "cursor" || "$AGENT" == "windsurf" ]]; then
  echo -e "\n[+] Configuring for Cursor (.cursor/rules/)..."
  mkdir -p "$TARGET_DIR/.cursor/rules"
  cat <<'EOF' > "$TARGET_DIR/.cursor/rules/ui-ux-design-suite.mdc"
---
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
EOF
  echo "[✓] Created .cursor/rules/ui-ux-design-suite.mdc"
fi

# 5. Configure for GitHub Copilot
if [[ "$AGENT" == "all" || "$AGENT" == "copilot" ]]; then
  echo -e "\n[+] Configuring for GitHub Copilot (.github/copilot-instructions.md)..."
  mkdir -p "$TARGET_DIR/.github"
  COPILOT_FILE="$TARGET_DIR/.github/copilot-instructions.md"
  COPILOT_ENTRY=$'\n\n<!-- UI/UX Design System -->\nFollow the frontend architecture, anti-slop rules, and dashboard design guidelines specified in AGENTS.md.\n'
  if [[ -f "$COPILOT_FILE" ]]; then
    if ! grep -q "AGENTS.md" "$COPILOT_FILE"; then
      echo "$COPILOT_ENTRY" >> "$COPILOT_FILE"
      echo "[✓] Appended AGENTS.md instructions to copilot-instructions.md"
    fi
  else
    echo "# GitHub Copilot Instructions$COPILOT_ENTRY" > "$COPILOT_FILE"
    echo "[✓] Created .github/copilot-instructions.md"
  fi
fi

echo -e "\n=== Installation Complete! ==="
echo "Any agent working in '$TARGET_DIR' is now armed with senior UI/UX and dashboard design intelligence."
