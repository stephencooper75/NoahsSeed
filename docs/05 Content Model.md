# Noah's Seed — Content Model

## Purpose

The Content Model defines the things that can exist inside worlds created by the Noah's Seed Engine.

The engine provides reusable capabilities and behaviour.

The Content Model defines the content that uses those capabilities.

A new world should primarily require new content and configuration rather than changes to the underlying engine.

Examples of possible worlds include:

- Noah's World
- Another child's World
- Public Adventure World
- Regional or themed worlds

The same underlying engine should be capable of supporting them.

---

# 1. Core Principle

## Everything Is Content

Where practical, the things that exist in a world should be represented as data.

The engine determines how things behave.

For example:

```text
Content
Tesla vehicle

Engine
Vehicle behaviour
```

or:

```text
Content
Einstein mentor

Engine
Mentor behaviour
```

This separation allows the world to grow without requiring a new hard-coded system for every new piece of content.

---

# 2. World

A World is a complete experience.

A World can contain:

- Locations
- Entities
- Activities
- Characters
- Events
- Knowledge areas
- Discoveries
- Configuration
- Other content

A World may be personalised for an individual child.

The engine should not require a particular world to exist.

---

# 3. Content Pack

A Content Pack is a collection of related content that can be loaded into the engine.

Examples might include:

### Noah's World Content Pack

- Local locations
- Characters
- Wildlife
- Gardening content
- Music content
- Astronomy content
- Regional information

### Public Adventure Content Pack

- Generic locations
- Characters
- Activities
- Discoveries
- Learning content

Content Packs allow the same engine to support different experiences.

---

# 4. Location

A Location is a place within a World.

Examples include:

- Home
- Garden
- Beach
- Library
- Observatory
- Museum
- Forest
- Town
- City
- Planet
- Moon

A Location can contain or provide access to:

- Entities
- Activities
- Events
- Knowledge opportunities
- Characters
- Discoveries
- Rewards

For example, a museum location might contain:

- Exhibits
- Fossils
- Historical objects
- Activities
- Characters
- Discovery opportunities

---

# 5. Entity

An Entity is something that exists within the world.

Examples include:

- Player
- Character
- NPC
- Animal
- Plant
- Vehicle
- Instrument
- Book
- Tool
- Toy
- Food
- Furniture
- Other objects

Entities can use reusable capabilities to determine what they can do.

The Content Model describes the entity.

The engine provides the behaviour.

---

# 6. Capabilities

Capabilities describe reusable abilities or properties that can be associated with content.

Examples include:

- Discoverable
- Collectible
- Growable
- Playable
- Interactable
- Conversational
- Rewardable
- Observable

A single piece of content may use several capabilities.

For example:

```text
Guitar

Discoverable
Collectible
Playable
```

or:

```text
Tree

Growable
Interactable
Discoverable
```

The capability architecture is defined in the engine architecture and capability reference documentation.

---

# 7. Character

A Character is an Entity with personality and interaction.

Examples include:

- Player character
- Parent
- Friend
- Mentor
- NPC
- Companion

Character content may include:

- Name
- Appearance
- Personality
- Dialogue style
- Interests
- Relationships
- Background information

Behaviour should be provided by reusable systems.

---

# 8. Mentor

A Mentor is a specialised type of Character.

Mentors can support learning and exploration.

Mentor content may include:

- Name
- Expertise
- Personality
- Teaching style
- Interests
- Knowledge areas
- Age adaptation settings
- Discovery relationships

For example, a science mentor might have expertise in:

- Physics
- Astronomy
- Curiosity

with a teaching style that is:

- Encouraging
- Question-based
- Imaginative

The mentor's behaviour belongs to reusable engine systems rather than being hard-coded into the individual mentor.

---

# 9. Activity

An Activity is something the child can do.

Examples include:

- Planting seeds
- Watering plants
- Reading books
- Playing music
- Exploring
- Solving puzzles
- Racing vehicles
- Identifying animals
- Performing experiments

Activity content may include:

- Identifier
- Name
- Description
- Location
- Difficulty
- Skills or knowledge involved
- Requirements
- Rewards

The ActivitySystem determines how an activity behaves.

---

# 10. Challenge

A Challenge is a reusable gameplay mechanism that can be used by activities.

Examples include:

- Recognition
- Memory
- Puzzle solving
- Sequencing
- Problem solving
- Timed challenges
- Identification

A Challenge should be reusable across different content categories.

For example, a recognition mechanism might be used for:

```text
Cars
"What make is this vehicle?"

Animals
"What animal is this?"

Astronomy
"Which planet is this?"
```

The underlying challenge mechanism remains the same.

---

# 11. Knowledge Domain

A Knowledge Domain represents an area of knowledge.

Examples include:

- Mathematics
- Reading
- Astronomy
- Biology
- History
- Music
- Languages
- Programming

Knowledge domains can be associated with locations, activities, discoveries, characters and other content.

For example:

```text
Museum
    ↓
Dinosaurs
Fossils
History
Evolution
```

or:

```text
Observatory
    ↓
Astronomy
Physics
Space
```

Knowledge should emerge naturally from exploration and discovery rather than requiring the game to present formal lessons.

---

# 12. Learning Topics

Knowledge Domains can contain more specific topics.

For example:

```text
Mathematics
    ↓
Addition
    ↓
Multiplication
    ↓
Long Division
    ↓
Algebra
    ↓
Calculus
```

or:

```text
Science
    ↓
Plants
    ↓
Animals
    ↓
Astronomy
    ↓
Physics
    ↓
Chemistry
```

The hierarchy should be flexible.

The game should not assume that every child encounters knowledge in the same order.

---

# 13. Event

An Event is something that happens within the world.

Examples include:

- A character appearing
- A meteor shower
- A rare animal encounter
- A birthday event
- A weather event
- An unusual discovery
- A world-state change

Events may trigger:

- Activities
- Conversations
- Learning opportunities
- Discoveries
- Rewards
- Other events

Events should be capable of supporting both ordinary and rare experiences.

---

# 14. Teachable Moment

A Teachable Moment is a natural learning opportunity created by something happening in the world.

Examples:

```text
Road event
    ↓
Road safety opportunity
```

```text
Beach event
    ↓
Ocean safety opportunity
```

```text
Garden event
    ↓
Plants and biology opportunity
```

```text
Museum event
    ↓
History or science opportunity
```

The important principle is that learning should arise naturally from the experience.

A Teachable Moment should not necessarily feel like a lesson.

---

# 15. Vehicle

A Vehicle is a type of Entity.

Examples include:

- Bicycle
- Train
- Boat
- Car
- Aircraft
- Spacecraft
- Truck
- Tractor

Vehicle content may include:

- Make
- Model
- Type
- Appearance
- Recognition information
- Rarity
- Activities
- Knowledge
- Discovery information

A rare Tesla appearance is content.

Vehicle behaviour belongs to reusable engine capabilities and systems.

---

# 16. Pet and Animal

Animals are world entities.

A Pet is an animal that has a persistent relationship with the child or world.

Pet content may include:

- Name
- Species
- Appearance
- Personality
- Behaviour configuration
- Relationship information

A specific pet should be represented as content rather than requiring a specialised engine class.

---

# 17. Plant

Plants are living entities within the world.

Plant content may include:

- Species
- Appearance
- Growth stages
- Environmental requirements
- Interactions
- Discovery information
- Knowledge
- Possible outcomes

The NatureSystem and simulation systems provide the behaviour.

The plant definition provides the content.

---

# 18. Instrument

An Instrument is an Entity that can potentially be played.

Examples include:

- Piano
- Guitar
- Violin
- Drums
- Fartophone
- Future instruments

Instrument content may include:

- Name
- Type
- Description
- Sound characteristics
- Appearance
- Discovery information
- Rarity
- Playable capability

The Music Engine provides the behaviour.

The specific instrument is content.

This distinction is particularly important as the Music Studio evolves.

---

# 19. Book

Books are content that can provide reading experiences and knowledge.

Book content may include:

- Title
- Author
- Description
- Reading complexity
- Subject
- Illustrations
- Knowledge topics
- Discovery relationships

The reading system determines how the book is experienced.

---

# 20. Object

Objects are general world entities.

Examples include:

- Tools
- Toys
- Furniture
- Food
- Clothing
- Rocks
- Seeds
- Fossils
- Decorations

Objects may gain additional behaviour through capabilities.

A simple rock and a magical Rainbow Dust container can therefore use the same general content architecture while having very different capabilities.

---

# 21. Experience

An Experience represents something the child can experience within the world.

Examples include:

- Playing piano
- Riding a Ferris wheel
- Riding a train
- Playing a game
- Story time
- Visiting a museum
- Watching a meteor shower

An Experience may combine:

- Content
- Activities
- Characters
- Knowledge
- Discovery
- Presentation

Experiences should be reusable where practical.

---

# 22. Discovery

Discovery is a major category of content in Noah's Seed.

Anything that can be discovered can potentially become Discovery content.

Examples include:

- Plants
- Animals
- Instruments
- Seeds
- Books
- Vehicles
- Fossils
- Astronomical objects
- Historical objects
- Magical objects
- Hidden locations
- Rare events

Discovery is not limited to physical objects.

A discovery can be an idea, experience, event, knowledge topic or other meaningful thing encountered by the child.

The detailed Discovery architecture is defined in:

**`07 Discovery System.md`**

---

# 23. Rewards

Rewards are content or outcomes that acknowledge meaningful progress or discovery.

Examples may include:

- Coins
- Badges
- Certificates
- Items
- New experiences
- Access to new content
- Discovery records

The game should not rely exclusively on numerical rewards.

Discovery itself can be the reward.

---

# 24. Region Pack

A Region Pack represents geographical and cultural configuration.

Examples include:

- Australia
- United States
- United Kingdom
- Japan

A Region Pack may contain:

- Language settings
- Measurement systems
- Road rules
- Wildlife
- Geographic information
- Cultural information

The underlying engine should remain independent of any one region.

---

# 25. Language Pack

A Language Pack provides language-specific content.

It may contain:

- Text
- Translations
- Audio
- Cultural variations
- Language-learning content

The same underlying systems should be capable of using different language packs.

---

# 26. Child Profile

A Child Profile defines the individual experience.

It may contain:

- Name
- Age
- Interests
- Demonstrated abilities
- Preferences
- Accessibility settings
- Progress
- Discoveries
- Relationships

The Child Profile should influence the experience without being embedded into engine code.

---

# 27. Personalisation

Content can be selected, configured or presented differently depending on the child.

Personalisation may use:

- Interests
- Previous discoveries
- Demonstrated ability
- Progress
- Preferences
- Accessibility settings
- Relationships

Personalisation should emerge from data and systems.

It should not require creating a different engine for every child.

---

# 28. Content Relationships

Content can be related to other content.

Examples include:

```text
Location
    contains
    → Plant
```

```text
Child
    discovers
    → Guitar
```

```text
Mentor
    knows_about
    → Astronomy
```

```text
Activity
    occurs_at
    → Garden
```

```text
Book
    teaches_about
    → Dinosaurs
```

These relationships allow the engine to connect content without hard-coding every possible relationship.

---

# 29. Content Should Support Experimentation

Content should not necessarily have only one intended use.

Where appropriate, content should be capable of interacting with other systems.

For example:

```text
Rainbow Dust
    +
Apple
    ↓
Possible unusual result
```

or:

```text
Rainbow Dust
    +
Flower
    ↓
Possible unusual result
```

The exact behaviour belongs in the relevant systems.

The Content Model simply needs to allow content to participate in those relationships.

This supports the broader philosophy that children should be encouraged to ask:

> "What happens if I try this?"

---

# 30. Content and the Engine

The preferred relationship is:

```text
Content
    ↓
Definitions / Entities
    ↓
Capabilities
    ↓
Systems
    ↓
World Behaviour
```

Adding a new piece of content should increasingly become a data/configuration task rather than a new engine-code task.

For example:

```text
Add Guitar
    ↓
Guitar content definition
    ↓
Discoverable
Collectible
Playable
    ↓
Existing systems provide behaviour
```

---

# 31. Future Expansion

The Content Model should eventually support:

- User-created worlds
- Custom maps
- Additional mentors
- New activities
- New learning domains
- Community content packs
- Additional languages
- Additional regions
- New discovery categories
- New experiments
- New world events

The model should be capable of expanding without requiring fundamental engine redesign.

---

# 32. What Does Not Belong in the Content Model

The Content Model should not become a description of engine implementation.

It should not contain detailed rules for:

- Rendering
- EventBus implementation
- SystemManager implementation
- Save-system implementation
- Simulation algorithms
- UI architecture
- Controller architecture

Those belong in the appropriate engine documentation.

The Content Model describes **what exists**.

The Engine Architecture describes **how it behaves**.

---

# 33. Content Model Test

When adding a new idea, ask:

### What is it?

### Is it content?

### What kind of entity or content is it?

### Which capabilities does it need?

### Which systems provide its behaviour?

### What other content does it relate to?

### Can it be represented as data?

### Can it eventually be discovered?

### Can the same structure support many future examples?

If those questions can be answered cleanly, the content is probably well suited to the Noah's Seed architecture.

---

# Final Principle

> **The engine defines what the world can do. The Content Model defines what exists within the world.**

A growing world should require increasingly more content, not increasingly more specialised engine code.

The ultimate goal is:

```text
Small reusable engine
        +
Rich content
        +
Reusable capabilities
        +
Discovery
        ↓
A world that can grow almost indefinitely
```