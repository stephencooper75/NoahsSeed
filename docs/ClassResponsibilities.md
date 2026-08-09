# Noah's Seed Class Responsibilities

## Game
Owns application orchestration.
Creates systems.
Registers systems.
Starts the game.
Should not directly manipulate the UI.

---

## GameScreenController
Owns the game screen.
Displays messages.
Displays locations.
Displays activities.
Does not contain gameplay logic.

---

## ActivityMenu
Creates activity buttons.
Displays available activities.
Does not decide gameplay outcomes.

---

## NavigationSystem
Changes visible screens.
Tracks the current screen.
No gameplay logic.

---

## NatureSystem
Controls nature events.
Publishes events.
No UI code.

---

## ActivitySystem
Starts activities.
Completes activities.
Publishes activity events.
No UI code.