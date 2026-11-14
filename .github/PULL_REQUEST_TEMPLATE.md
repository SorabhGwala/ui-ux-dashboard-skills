## Description
<!-- Provide a brief description of the changes introduced by this PR. -->

## Type of Change
- [ ] 🎨 New Skill or Guideline reference
- [ ] 🧩 New or improved Component Snippet (`snippets/`)
- [ ] 🐛 Bug fix / Design smell correction
- [ ] 📖 Documentation update
- [ ] ⚙️ Tooling / CLI / CI enhancement

## The 7 Golden Rules Checklist
- [ ] Does NOT introduce generic 3-column AI feature card grids.
- [ ] Honors the 3-Second First Glance Rule on data dashboards.
- [ ] Honors the Wordless Principle (zero sentences outside tooltips on metric cards).
- [ ] Protects data honesty (small bases < 5 never shout percentages).
- [ ] Provides explicit `:focus-visible` rings for all interactive elements.
- [ ] Never blocks clipboard paste in form inputs.
- [ ] Animates only GPU compositor properties (`transform`, `opacity`); no `transition: all`.

## Verification Steps
<!-- Describe the tests or commands executed to verify your changes. -->
1. Ran `node bin/cli.js --list`
2. Verified `SKILL.md` YAML frontmatter is valid and < 1024 chars.
