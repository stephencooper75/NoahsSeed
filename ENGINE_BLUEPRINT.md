# Noah's Seed Engine Blueprint

## Vision

The Noah's Seed Engine is a reusable world-building engine designed to create personalised adventure worlds for children.

Noah's World is the first and primary content pack.

The engine itself is independent of any specific child, location, interest or story.

The same engine should be capable of supporting:

- Noah's World
- Friends' Worlds
- Regional Worlds
- Public Editions
- Future educational adventure worlds

---

# Engine Philosophy

The engine provides capabilities.

Content provides experiences.

The engine should know:

- how worlds work
- how characters interact
- how activities run
- how progress is saved
- how learning adapts

The engine should not know:

- Noah
- Victor Harbor
- Tesla
- Einstein
- Archie
- Poe

Those belong to content and configuration.

---

# Core Engine Systems

## 1. World Engine

Purpose:

Controls the living world.

Responsibilities:

- locations
- environments
- world state
- time
- seasons
- weather
- movement between places

Examples:

- Home
- Garden
- Beach
- Museum
- Observatory
- Amusement Park

---

## 2. Entity Engine

Purpose:

Everything in the world is an entity.

Examples:

- child avatar
- mentor
- pet
- vehicle
- plant
- animal
- object

Entities can have components:

- appearance
- location
- behaviour
- interaction
- inventory
- dialogue
- knowledge

---

## 3. Navigation System

Purpose:

Controls movement through the world.

Responsibilities:

- screen changes
- location changes
- menus
- transitions
- future animations

The engine requests movement.

The navigation system handles implementation.

---

## 4. Registry System

Purpose:

Provides a consistent way to register and discover content.

Registries may include:

- Location Registry
- Entity Registry
- Mentor Registry
- Activity Registry
- Module Registry
- Achievement Registry
- Music Registry

New content should normally be added through registration rather than engine modification.

---

## 5. Content Pack System

Purpose:

Allows different worlds to exist on the same engine.

Examples:

Noah's World:

- Goolwa
- Victor Harbor
- Archie
- Poe
- Tesla events

Public World:

- fictional locations
- generic activities
- customisable characters

A content pack defines the experience.

---

# Personalisation Systems

## 6. Child Profile System

Stores information about the player.

Examples:

- name
- avatar
- age
- interests
- abilities
- preferences
- family information
- pets
- accessibility needs

Personal information should remain data-driven.

---

## 7. Interest Engine

Purpose:

Understands what fascinates the child.

Possible signals:

- time spent in locations
- repeated activities
- questions asked
- characters visited
- challenges attempted

Uses this information to personalise experiences.

---

## 8. Knowledge Engine

Purpose:

Tracks learning progress.

Domains may include:

- mathematics
- reading
- science
- astronomy
- nature
- languages
- music
- history

The system adapts difficulty to the child's ability.

---

# Character Systems

## 9. Mentor Engine

Purpose:

Creates meaningful relationships with mentors.

Mentors contain:

- expertise
- personality
- teaching style
- humour
- interests
- unlock conditions

Mentors grow with the child.

Example:

Einstein may discuss simple concepts with a young child and advanced physics with an older child.

---

## 10. NPC System

Purpose:

Controls non-player characters.

NPCs may include:

- family
- friends
- shopkeepers
- wildlife
- fictional characters

NPCs can have:

- routines
- personalities
- interactions
- memories

---

## 11. Conversation System

Purpose:

Controls dialogue.

Responsibilities:

- conversations
- age-appropriate language
- personality
- language support
- mentor interactions

---

# Learning And Activity Systems

## 12. Activity Engine

Purpose:

Provides reusable activities.

Examples:

- gardening
- reading
- puzzles
- music
- collecting
- building

Activities should be modular.

---

## 13. Challenge Engine

Purpose:

Provides reusable challenges.

Examples:

- races
- timing challenges
- memory games
- puzzles
- quizzes

A go-kart race and a space mission may use the same underlying challenge system.

---

## 14. Teachable Moment Engine

Purpose:

Turns world events into natural learning opportunities.

Examples:

Road crossing:

- road safety

Beach:

- ocean safety

Museum:

- history and science

Garden:

- biology

Learning should emerge from the world.

---

# World Simulation Systems

## 15. Event Engine

Creates unexpected moments.

Examples:

- rare vehicles
- wildlife encounters
- weather events
- celebrations
- discoveries

---

## 16. Memory Engine

Allows the world to remember.

Examples:

- plants grow
- mentors remember conversations
- pets develop relationships
- locations change

---

## 17. Wildlife Engine

Controls animals and nature.

Examples:

- birds
- insects
- pets
- marine life

---

# Progression Systems

## 18. Achievement Engine

Tracks meaningful accomplishments.

Examples:

- Astronomy Explorer
- Garden Guardian
- Music Apprentice

---

## 19. Inventory Engine

Controls collected items.

Examples:

- seeds
- books
- fossils
- shells
- rewards

---

## 20. Save System

Stores world progress.

Responsibilities:

- player progress
- unlocked content
- relationships
- achievements
- world state

---

# Adaptation Systems

## 21. Region Engine

Controls regional differences.

Examples:

Australia:

- left-side driving
- local wildlife
- local language conventions

USA:

- right-side driving
- different road safety guidance

---

## 22. Language Engine

Supports:

- translations
- language learning
- cultural content

Examples:

Einstein teaching German numbers.

---

## 23. Audio Engine

Controls:

- music
- sound effects
- instruments
- audio preferences

---

# Future Expansion Systems

Potential future systems:

- multiplayer
- parent dashboard
- cloud saves
- community content packs
- user-created worlds
- map-assisted world creation
- AI-assisted conversations

---

# Final Principle

The Noah's Seed Engine should make adding new ideas easier over time.

A new feature should ideally require:

- new content
- new configuration
- new assets

Not a redesign of the engine.

The goal is not to build a single game.

The goal is to build the foundation that allows many personalised worlds to exist.