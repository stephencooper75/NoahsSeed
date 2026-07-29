# Noah's Seed System Architecture

## Purpose

This document describes how the systems inside the Noah's Seed Engine communicate.

The goal is to ensure the engine remains modular, scalable and maintainable as the project grows.

Systems should have clear responsibilities and communicate through defined interfaces rather than becoming tightly connected.

The architecture should allow:

- Noah's World
- Friends' Worlds
- Regional Worlds
- Public Worlds
- Future user-created worlds

to all operate using the same underlying engine.

---

# High Level Architecture

The Noah's Seed Engine is divided into several layers.

## Layer Structure

The engine is organised into six major architectural layers.

The flow is:

1. Player Experience

2. Interface Layer

3. Core Engine

4. Systems Layer

5. Content Layer

6. Data Layer


Each layer has a specific responsibility.

The purpose of this separation is to ensure that new features can be added without creating unnecessary dependencies.

---

# Layer 1 - Core Engine

The Core Engine coordinates the entire application.

Responsibilities:

- Initialise systems
- Manage application lifecycle
- Load content packs
- Coordinate communication between systems
- Maintain overall game state

The Core Engine should know:

- What systems exist
- How systems communicate
- When systems start and stop

The Core Engine should not know:

- A child's favourite interests
- Specific locations
- Specific mentors
- Specific activities
- Personal family information

The engine provides capability.

Content provides experience.

---

# Layer 3 - Content Layer

The Content Layer defines experiences inside the world.

The engine provides the rules.

Content provides the world.

Examples of content packs:

- Noah's World
- Fleurieu Edition
- Public Adventure World
- Future user-created worlds

A content pack can contain:

- Locations
- Characters
- Mentors
- Activities
- Stories
- Artwork
- Sounds
- Configuration

The same engine should be capable of loading different content packs.

Example:

The engine understands:

"Vehicle Encounter"

The content pack decides whether the encounter contains:

- Tesla
- Toyota
- Truck
- Tractor
- Bicycle
- Race car

The engine does not need to change.

---

# Layer 4 - Data Layer

The Data Layer stores information and progress.

Examples:

- Child profiles
- Interests
- Learning progress
- Achievements
- Inventory
- Relationships
- World state
- Saved progress

Personalisation belongs in data.

The engine should respond to information stored in profiles.

Example:

A child profile may contain:

Interest:
Astronomy

The engine then decides:

- suggest astronomy activities
- introduce astronomy mentors
- unlock astronomy content

The engine does not contain child-specific rules.

---

# System Communication

## Event Bus

The Event Bus is a core communication system.

Systems should publish events rather than directly modifying other systems.

This reduces dependencies and allows new systems to be added later.

Example:

A child plants a seed.

The Garden activity publishes:

EVENT:

plant_created

Other systems can respond:

Achievement System:

Gardening achievement progress increased

Knowledge System:

Plant biology knowledge increased

Memory System:

Remember that the child planted a sunflower

Interest System:

Gardening interest increased

The Garden system does not need to know these systems exist.

The Garden system does not need to know these systems exist.

This allows the engine to grow without creating complex dependencies.

---

# Example Event Flow

## Tesla Encounter

A vehicle appears in the world.

The flow is:

Vehicle Entity appears

↓

Event:

vehicle_spotted

↓

Interest System checks vehicle interest

↓

Knowledge System may offer a vehicle activity

↓

Achievement System records progress

↓

Memory System saves the event

The same architecture can support:

- Cars
- Trucks
- Wildlife encounters
- Rare discoveries
- Special events
- Unexpected world moments

---

# Core System Responsibilities

## World System

Purpose:

Controls the living world.

Responsibilities:

- Locations
- Environments
- World state
- Time
- Weather
- Seasons
- Movement between places

Communicates with:

- Entity System
- Event System
- Navigation System

The World System knows where things exist.

It does not control their behaviour.

---

## Entity System

Purpose:

Everything that exists in the world is an entity.

Examples:

- Child avatar
- Mentors
- NPCs
- Pets
- Animals
- Vehicles
- Plants
- Objects

Entities can contain:

- Appearance
- Position
- Behaviour
- Interaction rules
- Dialogue
- Inventory
- Knowledge relationships

The Entity System provides the framework for things existing in the world.

---

## Navigation System

Purpose:

Controls movement through the world.

Responsibilities:

- Changing locations
- Screen transitions
- Moving between areas
- Managing world exploration

The Navigation System does not decide what exists in locations.

The World System provides that information.

---

# Activity System

Purpose:

Provides reusable playable experiences.

Examples:

- Gardening
- Reading
- Go-karts
- Music
- Puzzles
- Collecting
- Building
- Exploration

Activities should be modular.

An activity should define:

- What the child does
- Skills involved
- Difficulty
- Rewards
- Unlock requirements

The Activity System should not contain location-specific logic.

Example:

A racing activity could be used for:

- Go-karts
- Boats
- Cars
- Space vehicles

The challenge changes.

The underlying system remains the same.

---

# Challenge System

Purpose:

Provides reusable challenges.

Examples:

- Racing
- Timing
- Memory games
- Recognition tasks
- Problem solving
- Puzzles

A challenge is a reusable mechanic.

Content determines the theme.

Example:

A recognition challenge could identify:

- Cars
- Animals
- Stars
- Fossils
- Musical notes

---

# Knowledge System

Purpose:

Tracks learning progression.

Possible knowledge domains:

- Mathematics
- Reading
- Science
- Astronomy
- Languages
- Music
- Nature
- History

Responsibilities:

- Track learning progress
- Adjust difficulty
- Recommend suitable activities
- Unlock appropriate content

The Knowledge System should adapt to demonstrated ability rather than only age.

---

# Mentor System

Purpose:

Creates meaningful relationships with guides and teachers.

Mentors contain:

- Expertise
- Personality
- Teaching style
- Interests
- Dialogue style
- Unlock conditions

Example:

Einstein may introduce:

A young child:
- curiosity
- simple science ideas

An older child:
- advanced physics concepts

The mentor grows with the child.

---

# Dialogue System

Purpose:

Controls conversations.

Responsibilities:

- Character dialogue
- Personality
- Age appropriate communication
- Language support
- Mentor interactions

Dialogue should be separate from character data.

A character defines who they are.

The Dialogue System controls how conversations happen.

---

# Memory System

Purpose:

Allows the world to remember.

Examples:

- Plants grow over time
- Mentors remember interactions
- Pets develop relationships
- Important discoveries are recorded
- Locations change

Memory helps the world feel alive.

---

# Interest System

Purpose:

Understands what interests the child.

Possible signals:

- Time spent in locations
- Activities repeated
- Characters visited
- Challenges attempted
- Topics explored

The system uses these signals to personalise experiences.

Example:

A child repeatedly visits the observatory.

The system may:

- introduce astronomy mentors
- offer astronomy activities
- unlock astronomy locations

---

# Dependency Rules

## Rule 1

Systems should communicate through defined interfaces and events.

Avoid systems directly changing other systems.

Bad:

Garden System directly updates Knowledge System.

Good:

Garden System publishes:

plant_created

Knowledge System responds.

---

## Rule 2

Content should not contain engine logic.

Bad:

Einstein character contains saving functionality.

Good:

Einstein contains:

- personality
- expertise
- dialogue data

The Mentor System provides behaviour.

---

## Rule 3

Personal information belongs in profiles.

Bad:

The engine contains rules about Noah.

Good:

The Child Profile contains information about the child.

The engine responds to profile data.

---

# Future Architecture Goals

The architecture should eventually support:

- Multiple children
- Multiple worlds
- Multiple languages
- Multiple regions
- User-created worlds
- Adaptive learning
- AI-assisted conversations
- Cloud saving
- Parent dashboards
- Community content packs

without requiring changes to the core engine.

---

# Ultimate Goal

The Noah's Seed Engine should allow:

A new child.

A new location.

A new mentor.

A new activity.

A new learning experience.

A new world.

to be added primarily through content and configuration rather than rewriting core systems.

The engine should become more powerful over time, not more complicated.