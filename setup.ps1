<#
.SYNOPSIS
    Universal Multi-Agent Installer & Linker for UI/UX & Dashboard Design Skills.
.DESCRIPTION
    Integrates the UI/UX and Dashboard Design Skills suite into any target repository
    for Claude Code, Google Antigravity, Cursor, GitHub Copilot, and Codex.
.PARAMETER TargetDir
    The root directory of the target project (e.g. "C:\projects\my-app").
.PARAMETER Agent
    Target agent tool: "all", "claude", "gemini", "cursor", "copilot", or "windsurf". Default is "all".
.PARAMETER Mode
    "copy" (creates independent copies) or "symlink" (creates symlinks). Default is "copy" for maximum compatibility.
.EXAMPLE
    & ".\setup.ps1" -TargetDir "C:\projects\my-app"
    & ".\setup.ps1" -TargetDir "C:\projects\my-app" -Agent "cursor"
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory = $true, Position = 0)]
    [string]$TargetDir,

    [Parameter(Mandatory = $false)]
    [ValidateSet("all", "claude", "gemini", "cursor", "copilot", "windsurf")]
    [string]$Agent = "all",

    [Parameter(Mandatory = $false)]
    [ValidateSet("copy", "symlink")]
    [string]$Mode = "copy"
)

$ErrorActionPreference = "Stop"

$SourceDir = $PSScriptRoot
$SkillsSourceDir = Join-Path $SourceDir "skills"
$AgentsSourceFile = Join-Path $SourceDir "AGENTS.md"

if (-not (Test-Path $TargetDir)) {
    Write-Host "Target directory '$TargetDir' does not exist. Creating..." -ForegroundColor Yellow
    New-Item -ItemType Directory -Path $TargetDir -Force | Out-Null
}

$ResolvedTarget = (Resolve-Path $TargetDir).Path
Write-Host "=== Setting up UI/UX & Dashboard Design Skills in: $ResolvedTarget ===" -ForegroundColor Cyan

# 1. Install AGENTS.md in Target Root
$TargetAgentsFile = Join-Path $ResolvedTarget "AGENTS.md"
if (-not (Test-Path $TargetAgentsFile)) {
    Copy-Item -Path $AgentsSourceFile -Destination $TargetAgentsFile -Force
    Write-Host "[✓] Created root AGENTS.md router" -ForegroundColor Green
} else {
    Write-Host "[i] AGENTS.md already exists in target; skipping overwrite" -ForegroundColor DarkGray
}

# Helper function to install skills folder
function Install-SkillsFolder {
    param([string]$DestinationDir)
    if (-not (Test-Path $DestinationDir)) {
        New-Item -ItemType Directory -Path $DestinationDir -Force | Out-Null
    }

    $SkillFolders = Get-ChildItem -Path $SkillsSourceDir -Directory
    foreach ($skill in $SkillFolders) {
        $destSkillPath = Join-Path $DestinationDir $skill.Name
        if ($Mode -eq "symlink") {
            if (Test-Path $destSkillPath) { Remove-Item -Recurse -Force $destSkillPath }
            New-Item -ItemType SymbolicLink -Path $destSkillPath -Target $skill.FullName -Force | Out-Null
            Write-Host "    Linked skill: $($skill.Name)" -ForegroundColor Green
        } else {
            if (-not (Test-Path $destSkillPath)) {
                Copy-Item -Path $skill.FullName -Destination $destSkillPath -Recurse -Force
                Write-Host "    Copied skill: $($skill.Name)" -ForegroundColor Green
            } else {
                Write-Host "    Skill already present: $($skill.Name)" -ForegroundColor DarkGray
            }
        }
    }
}

# 2. Configure for Claude Code
if ($Agent -eq "all" -or $Agent -eq "claude") {
    Write-Host "`n[+] Configuring for Claude Code (.claude/skills/)..." -ForegroundColor Yellow
    $ClaudeSkillsDir = Join-Path $ResolvedTarget ".claude\skills"
    Install-SkillsFolder -DestinationDir $ClaudeSkillsDir

    $ClaudeRulesFile = Join-Path $ResolvedTarget "CLAUDE.md"
    $ClaudeInclude = "`n`n<!-- UI/UX Design Suite Directive -->`n@AGENTS.md"
    if (Test-Path $ClaudeRulesFile) {
        $content = Get-Content -Path $ClaudeRulesFile -Raw
        if ($content -notmatch "AGENTS.md") {
            Add-Content -Path $ClaudeRulesFile -Value $ClaudeInclude
            Write-Host "[✓] Linked AGENTS.md in CLAUDE.md" -ForegroundColor Green
        }
    } else {
        Set-Content -Path $ClaudeRulesFile -Value "# Claude Code Configuration`n$ClaudeInclude"
        Write-Host "[✓] Created CLAUDE.md referencing AGENTS.md" -ForegroundColor Green
    }
}

# 3. Configure for Google Antigravity / Gemini CLI
if ($Agent -eq "all" -or $Agent -eq "gemini") {
    Write-Host "`n[+] Configuring for Antigravity & Gemini CLI (.gemini/skills/ & .agent/skills/)..." -ForegroundColor Yellow
    $GeminiSkillsDir = Join-Path $ResolvedTarget ".gemini\skills"
    $AgentSkillsDir = Join-Path $ResolvedTarget ".agent\skills"
    Install-SkillsFolder -DestinationDir $GeminiSkillsDir
    Install-SkillsFolder -DestinationDir $AgentSkillsDir
}

# 4. Configure for Cursor / Windsurf
if ($Agent -eq "all" -or $Agent -eq "cursor" -or $Agent -eq "windsurf") {
    Write-Host "`n[+] Configuring for Cursor (.cursor/rules/)..." -ForegroundColor Yellow
    $CursorRulesDir = Join-Path $ResolvedTarget ".cursor\rules"
    if (-not (Test-Path $CursorRulesDir)) {
        New-Item -ItemType Directory -Path $CursorRulesDir -Force | Out-Null
    }

    $CursorRuleFile = Join-Path $CursorRulesDir "ui-ux-design-suite.mdc"
    $CursorRuleContent = @"
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
"@
    Set-Content -Path $CursorRuleFile -Value $CursorRuleContent
    Write-Host "[✓] Created .cursor/rules/ui-ux-design-suite.mdc" -ForegroundColor Green
}

# 5. Configure for GitHub Copilot
if ($Agent -eq "all" -or $Agent -eq "copilot") {
    Write-Host "`n[+] Configuring for GitHub Copilot (.github/copilot-instructions.md)..." -ForegroundColor Yellow
    $GithubDir = Join-Path $ResolvedTarget ".github"
    if (-not (Test-Path $GithubDir)) {
        New-Item -ItemType Directory -Path $GithubDir -Force | Out-Null
    }

    $CopilotFile = Join-Path $GithubDir "copilot-instructions.md"
    $CopilotHeader = "`n`n<!-- UI/UX Design System -->`nFollow the frontend architecture, anti-slop rules, and dashboard design guidelines specified in AGENTS.md.`n"
    if (Test-Path $CopilotFile) {
        $copilotContent = Get-Content -Path $CopilotFile -Raw
        if ($copilotContent -notmatch "AGENTS.md") {
            Add-Content -Path $CopilotFile -Value $CopilotHeader
            Write-Host "[✓] Appended AGENTS.md instructions to copilot-instructions.md" -ForegroundColor Green
        }
    } else {
        Set-Content -Path $CopilotFile -Value "# GitHub Copilot Instructions`n$CopilotHeader"
        Write-Host "[✓] Created .github/copilot-instructions.md" -ForegroundColor Green
    }
}

Write-Host "`n=== Installation Complete! ===" -ForegroundColor Cyan
Write-Host "Any agent working in '$ResolvedTarget' is now armed with senior UI/UX and dashboard design intelligence." -ForegroundColor Green
