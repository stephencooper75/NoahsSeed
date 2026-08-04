# Capability Contract

Every capability in Noah Engine follows the same contract.

Capabilities expose behaviour.

They never contain game content.

---

## Required Functions

initialise()

Called once during engine startup.

---

shutdown()

Called when the engine closes.

---

update(deltaTime)

Called each game tick.

---

register()

Registers the capability with the Capability Registry.

---

getName()

Returns the capability name.

---

## Optional Functions

load()

save()

pause()

resume()

reset()

---

## Rules

Capabilities must never:

- Render graphics.
- Access HTML directly.
- Depend upon another capability without using the registry.
- Know about individual game content.

Capabilities should only expose reusable behaviour.
