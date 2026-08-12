# Noah's Seed Coding Standards

## Purpose

These standards exist to keep Noah's Seed simple, maintainable, and enjoyable to develop over many years.

Whenever there is a choice between a quick solution and a scalable solution, prefer the scalable solution unless there is a compelling reason not to.

---

## Core Principles

### 1. Build the engine, not just the game.

Every new feature should improve the engine as well as adding gameplay.

---

### 2. Behaviour belongs in code.

Rules and behaviour belong in the engine.

---

### 3. Content belongs in data.

Plants, pets, mentors, books, activities and other content belong in JSON files rather than hard-coded JavaScript.

---

### 4. Never hard-code Noah.

The engine should work for any family.

Noah's world is created by configuring data, not by changing code.

---

### 5. Keep commits small.

Each Git commit should represent one meaningful improvement.

---

### 6. Keep the project releasable.

At the end of every coding session:

- The app runs.
- The phone version runs.
- Everything is committed.
- GitHub is up to date.

---

### 7. Refactor early.

If something feels awkward or repetitive, improve it before building more features on top.

---

### 8. Simplicity beats cleverness.

Prefer code that is easy to understand over code that is clever but difficult to maintain.

---

### 9. Document important decisions.

Architectural decisions should be recorded so future development understands why they were made.

---

### 10. Think long term.

Every design decision should make Noah's Seed easier to extend in the future.