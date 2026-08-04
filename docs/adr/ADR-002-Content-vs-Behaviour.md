# ADR-002

Title

Separate Content from Behaviour

---

Status

Accepted

---

Decision

Content is passive.

Behaviour belongs to capabilities and systems.

---

Examples

Plant

Content

Grow()

Behaviour

belongs to the Simulation System.

Train Ticket

Content

Unlocking travel

belongs to Navigation Capability.

---

Reason

Separating data from behaviour allows content to be reused without changing engine logic.

## ADR-002

**Title:** Single Content Source

**Decision**

All game content will be loaded through ContentLoader.

There will only be one canonical data source for activities, plants, insects, items, recipes and future content.

Duplicate content definitions are prohibited.

**Status**

Accepted