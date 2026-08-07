# Noah's Seed Active Architecture

## Production Code

app/

All gameplay code lives here.

This is the only runtime code.

---

## Content

content/

Game content.

Dialogue.

Plants.

Rewards.

Achievements.

---

## Future Engine

engine/

Reference implementation.

Experimental architecture.

No runtime code should depend on this directory.

When Noah's Seed is mature, reusable systems may migrate here.

---

Rule:

Gameplay is built in app/.

Only proven systems are promoted into engine/.