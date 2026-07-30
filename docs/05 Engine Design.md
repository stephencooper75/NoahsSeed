# 05 Engine Design

## Purpose

The Noah's Seed engine is a reusable framework for creating personalised educational worlds.

The engine manages systems and behaviour.

Content defines what exists within those systems.

The engine should never assume a particular child, family, location, activity or educational pathway.

It should remain flexible enough to support years of expansion without requiring fundamental redesign.

---

# Design Principles

The engine should be:

- Modular
- Data-driven
- Extensible
- Configurable
- Reusable
- Simple
- Maintainable

Every system should have a single responsibility.

Adding new content should usually involve creating new data rather than modifying engine code.

---

# Core Engine Systems

The engine is made up of independent systems.

## World System

Responsible for organising the child's world.

Responsibilities include:

- Domains
- Locations
- Navigation
- Connections
- Unlocking new places

---

## World State

Responsible for representing the current state of the child's world.

World State stores information required to rebuild the world.

Examples include:

- Progress
- Inventory
- Rewards
- Garden state
- Character state
- World changes

World State does not control behaviour.

Systems modify World State through defined interactions.

The Save System stores and restores World State.

## Activity System

Responsible for everything the child can do.

Examples include:

- Brush teeth
- Water plants
- Read a book
- Visit the library
- Observe the Moon

Activities should be reusable across different locations.

---

## Progress System

Tracks the child's progress.

Examples include:

- Completed activities
- Long-term achievements
- World expansion
- Learning milestones

---

## Plant System

Responsible for living plants.

Examples include:

- Growth
- Health
- Water
- Seasons
- Harvests

The Plant System should work for any plant.

---

## Learning System

Responsible for educational experiences.

The Learning System should adapt content according to:

- Curiosity
- Reading ability
- Mathematical ability
- Parent preferences
- Previous learning

Age may influence complexity but should rarely determine availability.

---

## Discovery System

Encourages exploration.

The Discovery System introduces new locations, activities and educational content as the child's interests develop.

Curiosity should be rewarded.

---

## Character System

Responsible for people and animals within the world.

Examples include:

- Family members
- Friends
- Teachers
- Pets
- Wildlife

---

## Inventory System

Responsible for items collected or owned.

Examples include:

- Seeds
- Books
- Tools
- Rewards
- Collectables

---

## Weather System

Responsible for environmental conditions.

Examples include:

- Sunshine
- Rain
- Wind
- Storms
- Seasons

Weather should influence the world naturally.

---

## Time System

Responsible for time.

Examples include:

- Time of day
- Days
- Weeks
- Seasons
- Long-term progression

---

## Reward System

Encourages positive behaviour.

Rewards should emphasise:

- Discovery
- Achievement
- Growth

rather than punishment.

---

## Save System

Responsible for storing and restoring progress.

Everything required to rebuild a child's world should be saved.

---

# Engine Hierarchy

The engine understands several core concepts.

Engine

↓

Systems

↓

Domains

↓

Locations

↓

Experiences

↓

Activities

Every piece of content belongs somewhere within this hierarchy.

---

# Data Philosophy

Behaviour belongs in code.

Content belongs in data.

Examples of content include:

- Homes
- Learning institutions
- Gardens
- Forests
- Activities
- Plants
- Characters
- Educational content

The engine should load this information rather than hard-code it.

---

# Expansion Philosophy

The engine should never need redesign because the world becomes larger.

Adding:

- another home
- another country
- another language
- another educational pathway
- another activity

should usually involve creating data rather than changing engine behaviour.

---

# Guiding Question

Whenever designing a new feature, ask:

"Is this a new system, or is it simply new content?"

If it is only new content, the engine should already support it.