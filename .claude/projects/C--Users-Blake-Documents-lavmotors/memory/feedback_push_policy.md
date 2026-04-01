---
name: Push to production policy
description: Never push to master/prod unless user explicitly says so — always push to preview branch
type: feedback
---

Always commit and push to the `preview` branch by default. Never push to `master` unless the user explicitly says "push to prod", "push to master", or similar.

**Why:** Netlify deploy credits — every master push triggers a production deploy. Preview branch deploys are cheaper/separate.

**How to apply:** After completing any code changes, push to `preview`. If the user just says "push", that means `preview`. Only push to `master` when explicitly instructed, no exceptions.
