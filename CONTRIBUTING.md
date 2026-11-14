# Contributing to the UI/UX & Dashboard Design Skills Suite

Thank you for your interest in contributing! This project exists to eliminate generic AI UI slop and give coding agents executive-level design judgment.

---

## 1. Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please treat all contributors with respect and professionalism.

---

## 2. How to Contribute

### Reporting Bugs or Design Inconsistencies
* Search existing issues to ensure the defect hasn't already been reported.
* Open a new issue using our **Bug Report** template. Include code snippets, screenshots, or the specific AI prompt that produced subpar UI.

### Proposing New Skills or Component Patterns
* Open an issue using the **Feature Request** template to discuss your idea before writing code.
* Explain the domain need, the target surface mode (*Persuade*, *Operate*, *Read*, *Experience*), and why current guidelines don't cover it.

---

## 3. Development Workflow

1. **Fork & Clone:**
   ```bash
   git clone https://github.com/<your-username>/ui-ux-dashboard-skills.git
   cd ui-ux-dashboard-skills
   ```
2. **Create a Feature Branch:**
   ```bash
   git checkout -b feat/add-chart-pattern
   # Branch naming conventions: feat/*, fix/*, docs/*, chore/*
   ```
3. **Make Your Changes:**
   * Keep edits focused and modular.
   * If adding or editing a skill (`skills/<name>/SKILL.md`), ensure YAML frontmatter is valid and under 1024 characters total:
     ```yaml
     ---
     name: my-new-skill
     description: "Use when..."
     metadata:
       author: your-name
       version: "1.0.0"
     ---
     ```
   * If adding component snippets to `snippets/`, ensure they use clean TypeScript and Tailwind CSS with full `:focus-visible` and WCAG AA accessibility.
4. **Test Your Changes:**
   ```bash
   node bin/cli.js --list
   ```
5. **Commit with Conventional Commits:**
   * `feat: add treemap encoding guidelines`
   * `fix: correct polarity color in churn kpi tile`
   * `docs: improve multi-agent setup section`
6. **Submit a Pull Request:**
   * Fill out the PR template with a clear description and testing proof.

---

## 4. The Golden Standards

Every contribution must honor our 7 Golden Rules:
1. Ban generic 3-column AI feature cards.
2. Dashboards must answer primary questions in under 3 seconds.
3. Zero explanatory sentences outside tooltips on metric cards.
4. Data honesty: small bases (<5) never shout percentages.
5. Never write `outline: none` without `:focus-visible` replacement.
6. Never block clipboard paste in form inputs.
7. Animate only GPU compositor properties (`transform`, `opacity`); never `transition: all`.
