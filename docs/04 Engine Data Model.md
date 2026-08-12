# Noah's Seed — Engine Data Model

## Purpose

The Engine Data Model defines the kinds of information the Noah's Seed engine needs to represent.

The model exists to support a reusable engine while allowing the world itself to be created largely through content and data.

The data model should remain independent from presentation wherever practical.

---

# 1. Core Model

The engine can be understood through several broad categories of data:

```text id="5h8x9c"
Definitions
    ↓
Entities
    ↓
State
    ↓
Relationships
    ↓
Events
    ↓
Systems
```

These categories are related but should not be unnecessarily combined.

---

# 2. Definitions

A definition describes a type of content.

Examples include:

- Plant definition
- Animal definition
- Instrument definition
- Item definition
- Location definition
- Activity definition
- Discovery definition
- Character definition

Definitions are generally reusable.

For example, a `guitar` definition can describe what a guitar is without representing one particular guitar instance in the world.

---

# 3. Entities

An entity represents an identifiable thing within the world.

An entity may be:

- A plant
- An animal
- A character
- An instrument
- An object
- A discovered item
- A world object

An entity has identity and may have state.

Not every entity requires a unique class.

Where appropriate, entities can be represented through data combined with reusable capabilities.

---

# 4. Entity Identity

Entities require a stable identity when the world needs to remember them.

Examples:

```text id="o4q6kn"
plant_001
noah_guitar_001
ladybird_023
```

The exact identity mechanism may evolve.

The important principle is that persistent entities must be distinguishable from one another when their individual history matters.

---

# 5. State

State represents information that can change.

Examples include:

- Plant growth stage
- Whether something has been discovered
- Whether an activity has been completed
- Player progress
- Current location
- Inventory contents
- World time
- Relationship state
- Achievement state

State should represent meaningful game information rather than transient presentation details.

---

# 6. World State

WorldState represents the persistent state of the world and player.

Examples may include:

```text id="jzq9i7"
Player State
World State
Progress State
Discovery State
Activity State
Reward State
Achievement State
Nature State
```

The exact internal structure may evolve as systems mature.

World state should remain separate from rendering and interface state.

---

# 7. Player Data

Player data represents information about the child interacting with the world.

Possible categories include:

- Identity
- Interests
- Preferences
- Progress
- Discoveries
- Knowledge
- Achievements
- Rewards
- Learning evidence

The engine should avoid embedding assumptions about one particular child.

Noah-specific information belongs in player/content data rather than in reusable engine code.

---

# 8. Player Profile

The player profile can contain information used to personalise the experience.

Possible information includes:

- Interests
- Demonstrated abilities
- Reading level
- Mathematical ability
- Previous discoveries
- Preferred activities
- Learning evidence

The profile should be updated from meaningful evidence rather than relying solely on age.

The detailed learning model belongs in:

**`09 Learning System.md`**

---

# 9. Content Data

Content data describes what exists within a world.

Examples include:

```text id="2v0r0q"
Characters
Locations
Plants
Animals
Instruments
Books
Vehicles
Objects
Activities
Discoveries
Rewards
Educational Content
```

Content should be stored independently of the engine where practical.

This allows new content to be added without repeatedly changing engine code.

---

# 10. Content Definitions

A content definition should contain information appropriate to that kind of content.

For example, a simplified instrument definition might contain:

```text id="d6e3f4"
id
name
category
description
rarity
discoverable
```

The exact schema should be determined by the relevant system.

The data model should not require every possible property to exist on every type of content.

---

# 11. Capabilities

Capabilities describe reusable behaviour or properties that can be applied to entities or content.

Examples include:

- Discoverable
- Collectible
- Growable
- Playable
- Interactable
- Conversational
- Rewardable

Capabilities should be composable where practical.

A single entity may therefore have multiple capabilities.

For example:

```text id="z8b6js"
Guitar
 ├── Discoverable
 ├── Collectible
 └── Playable
```

This allows the same architecture to support future content.

---

# 12. Relationships

Relationships describe meaningful connections between data.

Examples include:

```text id="0j0v4k"
Child → discovered → Guitar

Child → knows → Astronomy

Plant → located_at → Garden

Character → knows_about → Science

Instrument → category → Music
```

Relationships should be represented explicitly where the engine needs to query or reason about them.

---

# 13. Collections

A collection represents a group of related entities or content.

Examples include:

- Discoveries
- Inventory
- Achievements
- Rewards
- Books
- Instruments

A collection should not automatically imply that every item in it is physically stored in an inventory.

For Noah's Seed, a collection may simply represent something the child has encountered, discovered or recorded.

---

# 14. Discovery Data

Discovery is a major part of the engine data model.

A discovery definition may eventually contain information such as:

```text id="wqf0oj"
id
name
category
description
discoverable
rarity
educationalContent
capabilities
```

Additional hidden or system-level properties may exist.

The detailed Discovery data model belongs in:

**`07 Discovery System.md`**

This document therefore establishes only the relationship between Discovery and the broader engine data model.

---

# 15. Rarity

Rarity should be represented internally as a numerical or otherwise machine-readable property rather than as presentation labels.

For example:

```text id="2gqzgj"
rarity = 487
```

The number itself should not normally be exposed to the child.

Presentation can translate internal values into age-appropriate language.

For example, the same underlying rarity could eventually be presented differently depending on the player's context.

This keeps game logic separate from presentation.

---

# 16. Hidden Properties

Some data may intentionally remain hidden from the child.

Possible hidden properties include:

- Rarity
- Wonder
- Magic
- Discovery probability
- Activation probability
- Uniqueness
- Other internal modifiers

Hidden data should be used to create meaningful experiences rather than unnecessary complexity.

The child should experience the outcome rather than needing to understand the underlying numbers.

---

# 17. Time

Time is part of world state.

The current architecture includes a WorldClock.

Time can eventually influence systems such as:

- Plant growth
- Wildlife
- Activities
- World events
- Rare discoveries
- Environmental changes

Time-based behaviour should be implemented by systems rather than duplicated across content.

---

# 18. Simulation State

Simulation systems may maintain state associated with processes occurring over time.

Examples include:

```text id="5q5fqt"
Growth Stage
Weather State
World Time
Wildlife State
Environmental State
```

Simulation state should represent meaningful world conditions.

It should not become a storage mechanism for transient visual effects.

---

# 19. Progression Data

Progression data can represent:

- Experience
- Achievements
- Rewards
- Progress
- Milestones

Progression should remain separate from discovery.

A discovery may contribute to progression, but discovery should not depend on one specific progression model.

---

# 20. Activity Data

Activities represent things the player can do.

An activity definition may contain information such as:

```text id="b6p0pu"
id
name
description
category
requirements
rewards
```

The ActivitySystem determines behaviour.

The activity data determines the content and configuration.

---

# 21. Event Data

Events represent meaningful occurrences within the engine.

Examples include:

```text id="o6r1yo"
plant_stage_changed
activity_completed
discovery_made
reward_granted
achievement_unlocked
location_changed
```

Events allow systems to respond to changes without unnecessary direct coupling.

Events should describe meaningful occurrences rather than every minor implementation detail.

---

# 22. Save Data

Persistent information must be serialisable by the SaveSystem.

Save data may include:

- Player state
- World state
- Progress
- Discoveries
- Activities
- Plants
- Rewards
- Achievements
- Other persistent entities

Transient UI state generally does not belong in save data.

---

# 23. Data Ownership

Each major system should have a clear understanding of the state it owns.

For example:

```text id="w8c8mb"
NatureSystem
    → nature / growth state

ProgressSystem
    → progression state

RewardSystem
    → reward state

AchievementSystem
    → achievement state

DiscoverySystem
    → discovery state
```

This prevents multiple systems from becoming competing authorities over the same data.

---

# 24. Data Versus Behaviour

The fundamental separation is:

```text id="1k0p7r"
DATA
What exists
What it is
What properties it has

BEHAVIOUR
What happens
How it changes
How systems interact with it
```

For example:

```text id="0xk5qf"
Guitar Definition
        ↓
describes the guitar

Playable Capability
        ↓
describes how it can be played

Music System
        ↓
performs the relevant behaviour
```

This separation is central to the architecture.

---

# 25. Data-Driven Expansion

The data model should make it possible to add new content without modifying existing systems unnecessarily.

Ideally:

```text id="ycv7p8"
Add new content
      ↓
Load definition
      ↓
Attach appropriate capabilities
      ↓
Existing systems recognise it
```

This is particularly important for Discovery.

Adding a new discovery should not require creating a new hard-coded discovery system.

---

# 26. Validation

Content data should eventually be validated before being used by the engine.

Validation can detect problems such as:

- Missing identifiers
- Duplicate identifiers
- Invalid references
- Missing required properties
- Invalid values
- Unsupported capabilities

Validation should make content errors easier to find before they become runtime problems.

---

# 27. Current Versus Future Data

The data model is allowed to evolve.

Documentation should distinguish between:

### Current

Data structures already used by the current implementation.

### Emerging

Structures currently being introduced or refactored.

### Planned

Structures identified for future systems.

The documentation should not imply that a planned schema already exists in code.

---

# 28. Extensibility

The data model should support future categories that have not yet been imagined.

Potential examples include:

- New instruments
- New plants
- New animals
- New vehicles
- New locations
- New discoveries
- New educational topics
- New forms of experimentation

The model should therefore favour reusable concepts over hard-coded lists.

---

# 29. Data Model Test

When introducing a new type of content, ask:

### Can it be represented as data?

### Does it require a new capability?

### Can an existing capability support it?

### Who owns its state?

### Does it need a persistent identity?

### Does it need to be discoverable?

### Does it need to be saved?

### Does it generate meaningful events?

### Does adding it require unnecessary engine changes?

These questions help prevent unnecessary architectural coupling.

---

# 30. Long-Term Goal

The ideal data model allows the engine to remain relatively small while the world becomes very large.

A future world might contain thousands of:

- Discoveries
- Plants
- Animals
- Characters
- Instruments
- Books
- Locations
- Activities
- Objects

without requiring thousands of specialised classes.

The data model should make that possible.

---

## Final Principle

> **The engine should define what the world can do. Data should define what exists within the world.**

The data model should make the engine more extensible, not more complicated.

New content should increasingly become a data problem rather than a code problem.