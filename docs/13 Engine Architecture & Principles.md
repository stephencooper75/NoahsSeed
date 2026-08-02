# 13 Engine Architecture & Principles

> *"Build an engine that can support many worlds, not a game that happens to work."*

---

# Purpose

This document defines the architectural principles that guide the development of the Noah's Seed engine.

It exists to ensure that every design decision contributes to a scalable, maintainable and reusable engine rather than solving only today's problem.

Whenever a new feature is added, this document should be consulted before implementation.

If a proposed feature conflicts with these principles, the architecture should be discussed before code is written.

---

# Design Philosophy

Noah's Seed is not simply a game.

It is a reusable game engine capable of supporting many different educational worlds and experiences.

The engine should know nothing about Noah, his family, his world or any future game content.

Everything that makes Noah's World unique belongs in content packs rather than the engine itself.

This separation keeps the engine reusable while allowing entirely different games to be built using the same underlying systems.

---

# Core Principles

## 1. Simplicity First

Prefer the simplest solution that remains extensible.

Avoid unnecessary complexity.

Complexity should only be introduced when it solves a real problem.

---

## 2. Single Responsibility

Every class should have one clear purpose.

Systems perform behaviour.

Entities store state.

Content defines the world.

---

## 3. Data Driven Design

Game behaviour should be controlled by data wherever practical.

Avoid hardcoding gameplay rules into engine code.

Changing content should rarely require changing engine code.

---

## 4. Separation of Engine and Content

Engine code should never contain Noah-specific content.

Instead:

Engine

↓

Content Pack

↓

World Data

This allows multiple worlds to share the same engine.

---

## 5. Extensibility Over Shortcuts

Whenever choosing between:

- a quick solution
- an extensible solution

prefer the extensible solution if it does not significantly increase complexity.

---

## 6. Avoid Duplication

Every piece of information should have one owner.

Every behaviour should exist in one place.

Avoid duplicated logic between systems.

---

## High-Level Architecture

```
                   Noah's Seed Engine

                    Core Engine
                         │
     ┌───────────────────┼───────────────────┐
     │                   │                   │
 Systems             World State       Content Manager
     │                   │                   │
     └───────────────Entities───────────────┘
                         │
                  Content Packs
```

The engine provides capabilities.

Content provides meaning.

---

# Core Engine

The core engine is permanent.

It provides the fundamental infrastructure required by every world.

Current core systems include:

- EventBus
- SaveSystem
- WorldState
- ContentManager
- SystemManager
- NavigationSystem

Future additions will extend these capabilities without changing the architectural philosophy.

---

# World State

WorldState represents the current state of the game.

It is the single source of truth.

WorldState should contain only persistent game data.

It should never contain gameplay logic.

Examples include:

- metadata
- entities
- progression
- collections
- economy
- world state
- settings

Systems modify WorldState.

WorldState never modifies itself.

---

# Entities

Everything that exists within a world should be represented as an Entity.

Examples include:

- Player
- NPCs
- Plants
- Animals
- Items
- Buildings
- Vehicles

Specialised entity types inherit from the base Entity class.

For example:

```
Entity

├── Character
│     ├── Player
│     └── NPC
│
├── Item
│     ├── Tool
│     ├── Food
│     ├── Book
│     └── Ticket
│
├── Plant
├── Pet
├── Vehicle
└── Building
```

This creates one consistent representation for every object in the game.

---

# Systems

Systems contain behaviour.

They perform actions.

They modify WorldState.

Systems should never duplicate responsibilities.

Examples include:

- EntitySystem
- InventorySystem
- TravelSystem
- DialogueSystem
- TimeSystem
- SchedulerSystem
- QuestSystem
- RewardSystem
- AchievementSystem
- ProgressSystem
- RelationshipSystem
- WellbeingSystem

Systems should communicate through the EventBus whenever practical rather than directly depending on one another.

---

# Data Ownership

Every piece of data should have a single owner.

Examples:

Entity owns:

- identity
- state
- properties

Inventory owns:

- item references

World owns:

- global conditions
- unlocked locations
- weather

Progression owns:

- experience
- achievements
- milestones

Clear ownership prevents duplicated state and inconsistent behaviour.

---

# Inventory Philosophy

Inventories are containers.

They do not own items.

They store references to entities.

For example:

Player Inventory

↓

Compass

Apple

Book

Train Ticket

The actual item data exists only once inside the Entity registry.

This avoids duplication while making item movement extremely efficient.

---

# Item Philosophy

Items are data.

They should not contain gameplay logic.

For example:

Compass

```
navigationBonus = 20
```

The TravelSystem decides how that affects movement.

Apple

```
nutrition = 15
hydration = 3
```

The WellbeingSystem decides how those values influence the player.

Keeping items passive makes them reusable across many systems.

---

# Content Packs

The engine contains no world-specific content.

Everything unique belongs in content packs.

Examples:

Noah's World

Future Science World

Historical Australia

Community Worlds

Content packs define:

- locations
- characters
- dialogue
- quests
- items
- educational content
- artwork
- audio

The engine simply loads and runs them.

---

# Design Patterns

The engine primarily uses:

- Composition over inheritance where practical.
- Data-driven configuration.
- Event-driven communication.
- Clear ownership of responsibilities.
- Reusable systems.
- Small focused classes.

Inheritance should be used carefully and only where genuine "is-a" relationships exist.

---

# Architectural Decisions

Major architectural decisions should be recorded here.

Examples include:

- Why the player is an Entity.
- Why items contain data instead of behaviour.
- Why inventories store references instead of objects.
- Why worlds are implemented as content packs.
- Why systems remain independent.

Recording the reasoning behind decisions is as important as recording the decisions themselves.

---

# Future Evolution

This architecture is intended to evolve.

Future improvements may include:

- Component-based entities.
- Advanced AI behaviours.
- Multiplayer support.
- Plugin systems.
- Community-created content packs.
- Visual scripting.
- Mod support.

Architectural evolution should preserve the core principles defined in this document whenever possible.

---

# Guiding Principle

Whenever faced with multiple possible designs, choose the one that:

- keeps responsibilities clear,
- minimises duplication,
- increases reusability,
- scales naturally,
- and keeps the engine independent from any particular game world.

Every feature should make the engine better, not merely bigger.

---

## Revision History

| Version | Date | Summary |
|---------|------|---------|
| 1.0 | 31 July 2026 | Initial architecture document created. |