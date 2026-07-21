---
name: pr-description
description: Writes pull request descriptions. Use when create a PR, write a PR or when the user asks to summarize changes for a pull request
---

When writing a PR description:
1. run `git diff main...HEAD` to see all changes on this branch
2. Write a description following this format

##What
One sentence explaining what this PR does.

##Why
Bried context on why this change is needed

##Changes
- Bullet points of specific changes made
- Group related changes together
- Mention any files deleted or renamed

##Testing
How to verify this works. Include specific commands if relevant

Keep descriptions concise. focus on what a reviewer needs to know.