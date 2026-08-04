# Noah Engine Glossary

Version: 0.1

This document defines the language used throughout Noah Engine.

These definitions are architectural and should remain stable.

---

## Engine

The reusable software platform that powers Noah's Seed and future worlds.

The Engine contains no game-specific content.

---

## Game

A world built on top of the Engine.

Noah's Seed is a game.

Future games may also use Noah Engine.

---

## Capability

A reusable ability provided by the engine.

Examples:

- Learning
- Inventory
- Dialogue
- Navigation
- Music

Capabilities provide behaviour.

They never contain content.

---

## System

A continuously running service.

Examples:

- Simulation
- Save
- EventBus
- Achievement
- Progress

Systems manage behaviour over time.

---

## Registry

A collection that stores and retrieves engine objects.

Examples:

- Capability Registry
- Experience Registry
- System Registry

Registries never implement behaviour.

---

## Provider

A replaceable source of external information.

Examples:

- AI
- Curriculum
- Knowledge
- Assets

Providers can be replaced without changing engine code.

---

## Content

Data used by the game.

Examples:

- Plants
- Rewards
- NPCs
- Books
- Activities

Content is passive.

Content contains no behaviour.

---

## Experience

A self-contained interactive experience that can be launched by the engine.

Examples:

- Piano
- Chess
- Space Invaders
- Cockle Train
- Ferris Wheel

Experiences use capabilities.

Experiences never modify engine architecture.

---

## Entity

Anything that exists within the world.

Examples:

- Player
- NPC
- Plant
- Train
- Backpack

---

## World

A collection of locations, entities, rules and experiences.

---

## Module (Reserved)

The term Module is reserved.

Its meaning has not yet been finalised.

Do not use Module in code until an architectural decision has been made.