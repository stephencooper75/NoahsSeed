# Foundations

Noah's Seed is built on a small number of architectural principles.

These principles guide every design decision and help ensure the project remains simple, flexible and enjoyable to develop over many years.

---

## Build the engine, not just the game

Every feature should improve the underlying engine as well as adding gameplay.

Reusable systems are preferred over one-off solutions.

---

## Generic before specific

The engine should understand concepts, not individual examples.

Examples:

- Plant, not sunflower.
- Mentor, not Einstein.
- Pet, not dog.
- Activity, not maths quiz.

Specific content belongs in the Content Library.

---

## Behaviour belongs in code

Rules, logic and behaviour belong in the engine.

---

## Content belongs in data

Plants, pets, mentors, books, activities and other content should be stored as data rather than hard-coded.

---

## One engine, many worlds

The same engine should support many families without changing code.

Individual worlds are created through configuration and content.

---

## Engine architecture

The project is organised into four layers:

Engine

↓

Content Library

↓

Family Data

↓

Save Data

Each layer has a single responsibility and should remain independent wherever practical.

---

## Long-term thinking

When choosing between a quick solution and a scalable solution, prefer the scalable solution unless there is a compelling reason not to.

---

## Keep it simple

Simple, readable solutions are preferred over clever or complicated ones.

Future maintainability is more important than short-term convenience.