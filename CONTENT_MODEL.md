# Noah's Seed Content Model

## Purpose

This document defines the building blocks that create worlds inside the Noah's Seed Engine.

The engine provides reusable capabilities.

The Content Model defines the things that exist inside those worlds.

A new world should primarily require new content and configuration, not changes to the engine.

Examples:

- Noah's World
- Amy's World
- Public Adventure World
- Fleurieu Edition

can all use the same underlying engine.

---

# Core Concept: Everything Is Data

Content should describe what exists.

The engine decides how things behave.

Example:

Content:

Tesla vehicle.

Engine:

Vehicle interaction system.

Content:

Einstein mentor.

Engine:

Mentor relationship system.

This separation allows unlimited expansion.

---

# World

A World is a complete experience.

Examples:

- Noah's World
- Public Adventure World
- Space Explorer World

A World contains:

- Locations
- Entities
- Activities
- Mentors
- Events
- Knowledge areas
- Configuration

A World may be personalised for a specific child.

---

# Content Pack

A Content Pack is a collection of content that can be loaded into the engine.

Examples:

Noah's World Content Pack:

- Goolwa
- Victor Harbor
- Archie
- Poe
- Tesla events
- Astronomy content

Public Content Pack:

- Generic locations
- Custom characters
- General activities

Content Packs allow the same engine to support different experiences.

---

# Location

A Location is a place inside a world.

Examples:

- Home
- Garden
- Beach
- Library
- Observatory
- Museum
- Amusement Park

A Location can contain:

- Entities
- Activities
- Events
- Knowledge opportunities
- NPCs
- Rewards

Example:

Victor Harbor location:

Contains:

- Ferris wheel
- Beach
- Shops
- Wildlife
- Activities

---

# Entity

An Entity is anything that exists in the world.

Examples:

- Child avatar
- Mentor
- NPC
- Pet
- Animal
- Vehicle
- Plant
- Object

Entities use components to define their capabilities.

---

# Components

Components are reusable abilities or properties.

An Entity is created by combining components.

Example:

Ferris wheel:

Components:

- Position
- Appearance
- Animation
- Interaction
- Ride behaviour
- Sound
- Reward

Tree:

Components:

- Position
- Growth
- Seasons
- Interaction
- Resource collection

Mentor:

Components:

- Appearance
- Dialogue
- Knowledge
- Memory
- Relationship

This allows flexible creation of new objects.

---

# Character

A Character is an Entity with personality and interaction.

Examples:

- Noah avatar
- Parents
- Friends
- Mentors
- NPCs

Characters contain:

- Name
- Appearance
- Personality
- Dialogue style
- Relationships
- Interests

Behaviour comes from systems.

---

# Mentor

A Mentor is a special type of Character.

Mentors guide learning and exploration.

A Mentor contains:

- Name
- Expertise
- Personality
- Teaching style
- Interests
- Unlock conditions
- Age adaptation settings

Example:

Einstein:

Expertise:

- Physics
- Astronomy
- Curiosity

Teaching style:

- Encouraging
- Question based
- Imaginative

---

# Activity

An Activity is something the child can do.

Examples:

- Planting seeds
- Reading books
- Racing go-karts
- Playing music
- Solving puzzles
- Identifying vehicles

Activities contain:

- Name
- Description
- Required location
- Difficulty
- Skills developed
- Rewards
- Unlock conditions

Activities should be reusable.

---

# Challenge

A Challenge is a reusable game mechanic.

Examples:

- Timed race
- Memory challenge
- Recognition challenge
- Puzzle
- Quiz

A Challenge can appear in many activities.

Example:

Recognition challenge:

Cars:

"What make is this vehicle?"

Animals:

"What animal is this?"

Astronomy:

"Identify this planet."

---

# Knowledge Domain

A Knowledge Domain represents an area of learning.

Examples:

- Mathematics
- Reading
- Astronomy
- Biology
- History
- Music
- Languages

Locations and activities can unlock knowledge domains.

Example:

Museum:

- Dinosaurs
- Evolution
- Fossils

Observatory:

- Space
- Physics
- Astronomy

---

# Event

An Event is something that happens in the world.

Examples:

- Tesla appears
- Meteor shower
- Rare animal encounter
- Birthday event
- Weather event

Events may trigger:

- Activities
- Learning opportunities
- Rewards
- Conversations

---

# Teachable Moment

A Teachable Moment is a natural learning opportunity created by the world.

Examples:

Road event:

Learning:

Road safety

Beach event:

Learning:

Ocean safety

Garden event:

Learning:

Plants and biology

Museum event:

Learning:

History and science

The learning should emerge naturally from the experience.

---

# Vehicle

A Vehicle is an Entity type.

Examples:

- Tesla
- Toyota
- Subaru
- Truck
- Tractor
- Bicycle

Vehicles may contain:

- Make
- Model
- Type
- Rarity
- Recognition information
- Activities
- Learning opportunities

A rare Tesla appearance is content.

The Vehicle System handles the behaviour.

---

# Pet

A Pet is an Entity type.

Examples:

- Cat
- Dog
- Bird
- Other animals

Pets may contain:

- Name
- Personality
- Appearance
- Behaviour
- Relationship level

Example:

Archie and Poe would be content data, not engine code.

---

# Region Pack

A Region Pack controls geographical and cultural differences.

Examples:

- Australia
- USA
- UK
- Japan

Contains:

- Language settings
- Road rules
- Measurement systems
- Wildlife
- Cultural information

Example:

Australia:

Look right, left, right.

USA:

Look left, right, left.

---

# Language Pack

A Language Pack controls language content.

Contains:

- Text translations
- Audio
- Cultural variations
- Language learning content

Example:

Einstein may introduce German counting.

The same learning system can support other languages.

---

# Child Profile

A Child Profile defines the individual experience.

Contains:

- Name
- Age
- Interests
- Abilities
- Preferences
- Accessibility settings
- Progress
- Relationships

The Child Profile influences the world.

---

# Future Expansion

The Content Model should eventually support:

- User-created worlds
- Custom maps
- Additional mentors
- New activities
- New learning domains
- Community content packs
- Additional languages
- Additional regions

---

# Final Principle

The Content Model should make adding new ideas simple.

Adding a dinosaur museum should mostly require:

- A new location
- New entities
- New activities
- New knowledge content

Adding a new child should require:

- A new Child Profile

The engine should continue growing without becoming more complicated.