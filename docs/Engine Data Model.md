# 15 Engine Data Model

## Purpose

This document defines the core data owned by the engine.

It intentionally describes structure rather than implementation.

Systems may read and modify this data, but the structure should remain stable unless there is a compelling architectural reason to change it.

---

# Core Principles

- Everything in the game is ultimately represented by one or more Entities.
- Systems contain behaviour.
- WorldState contains state.
- Content Packs provide data.
- The engine should never contain Noah-specific logic.
- The engine adapts to the player through learner models, not age-based assumptions.

---

# High Level Structure

WorldState

├── metadata
├── world
├── entities
├── progression
├── economy
├── collections
├── settings
├── learnerProfiles

---

# metadata

Information about the save itself.

Examples:

- version
- created
- modified
- playTime

---

# world

Current simulation state.

Examples:

- currentTime
- currentSeason
- currentWeather
- activeWorld
- activeLocation

---

# entities

Registry of every entity that exists.

Examples:

- player
- NPCs
- items
- plants
- pets
- buildings
- vehicles

The registry is the engine's source of truth.

---

# progression

Tracks game progression.

Examples:

- completed quests
- discovered locations
- unlocked mechanics
- achievements

---

# economy

Tracks currencies and trading systems.

Examples:

- coins
- premium currency
- reputation
- trading values

---

# collections

Tracks completion-style content.

Examples:

- fish caught
- insects discovered
- books read
- recipes unlocked

---

# settings

Player preferences.

Examples:

- language
- accessibility
- audio
- graphics

---

# learnerProfiles

Stores adaptive learning information.

A learner profile is attached to a player rather than the game itself.

Examples:

- mathematics
- reading
- writing
- science
- music
- creativity
- social interaction
- curiosity
- persistence

The engine never labels a child.

It estimates readiness for future experiences.

---

# Entity Structure

Every entity should eventually follow a consistent model.

Entity

- id
- type
- name
- state
- properties

Optional

- inventory
- learnerProfileId
- relationships
- components (future)

---

# Ownership

WorldState owns data.

Systems own behaviour.

Content Packs own educational content.

The engine owns adaptation.
