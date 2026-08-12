# Noah's Seed — Engine Architecture

## Purpose

The Noah's Seed engine provides the reusable systems that make the world function.

The engine should not contain the specific content of Noah's world wherever that content can reasonably be represented as data.

The architecture therefore separates:

**Engine**

from

**Content**

and from

**Presentation**.

The engine defines capabilities and behaviour.

Content defines what exists.

Presentation determines how the result is shown to the child.

---

# 1. Architectural Philosophy

The engine is being built as a reusable foundation rather than as a collection of feature-specific implementations.

The preferred relationship is:

```text
Content
   ↓
Entities / Definitions
   ↓
Capabilities
   ↓
Systems
   ↓
World State
   ↓
Presentation
```

This is a conceptual model rather than a requirement that every feature must contain every layer.

The purpose is to keep responsibilities clear and reusable.

---

# 2. Content

Content describes what exists in the world.

Examples include:

- Plants
- Animals
- Instruments
- Locations
- Characters
- Activities
- Discoveries
- Rewards
- Books
- Vehicles
- Objects
- Educational material

Content should be represented as data wherever practical.

For example, a guitar should be describable as content rather than requiring a new hard-coded class simply because it is a guitar.

Content can therefore grow independently of the core engine.

---

# 3. Entities

An entity represents something that exists in the world.

Examples include:

- A plant
- A character
- An animal
- An instrument
- A discovered object
- A location
- A world object

Entities may contain identity, state and relationships.

An entity does not need to contain every possible behaviour.

Behaviour should generally be provided by systems or capabilities.

---

# 4. Capabilities

A capability represents something that a thing can do or something the engine can do with it.

Examples might include:

- Discoverable
- Collectible
- Growable
- Playable
- Interactable
- Conversational
- Movable
- Observable
- Teachable
- Rewardable

A capability should describe reusable behaviour rather than a single specific feature.

For example:

```text
Instrument
    ↓
Playable capability
```

rather than:

```text
GuitarSystem
ViolinSystem
DrumSystem
FartophoneSystem
```

The specific instruments become content that uses the reusable capability.

---

# 5. Systems

Systems perform behaviour.

A system should have a clear responsibility.

Examples in the current project include:

- ActivitySystem
- AchievementSystem
- NatureSystem
- ProgressSystem
- RewardSystem
- SimulationSystem
- WorldSystem
- LocationSystem
- EntitySystem
- SaveSystem
- NavigationSystem

A system may coordinate entities, capabilities, world state and events.

Systems should not become large collections of unrelated responsibilities.

---

# 6. Single Responsibility

Every class and system should have a clear primary responsibility.

The Music Studio refactor established this principle particularly clearly.

Responsibilities that were previously combined were separated into components such as:

- ToolbarRenderer
- FooterRenderer
- KeyboardRenderer
- KeyboardController
- InstrumentController
- CloseController
- MusicEngine
- DialogueWindow
- ExperienceController

The MusicStudio class then became primarily an orchestration point.

This is the preferred direction for future architecture.

A class that continually accumulates unrelated responsibilities should be considered for refactoring.

---

# 7. Orchestration

Some classes need to coordinate other components.

An orchestration class should primarily connect components rather than implementing all of their internal behaviour.

For example:

```text
MusicStudio
    ↓
ToolbarRenderer
KeyboardRenderer
KeyboardController
InstrumentController
MusicEngine
DialogueWindow
ExperienceController
```

The orchestrator knows how the parts work together.

The individual components know how to perform their own responsibilities.

---

# 8. Events

The engine uses event-driven communication where appropriate.

The EventBus provides a way for systems to communicate without requiring unnecessary direct dependencies between them.

Conceptually:

```text
System A
   ↓
EventBus
   ↓
System B
```

For example:

```text
Plant grows
    ↓
plant_stage_changed
    ↓
Presentation responds
```

Events should describe meaningful occurrences.

They should not become an excuse to make every interaction indirect.

Use direct dependencies where they make the architecture clearer.

---

# 9. World State

WorldState represents persistent or meaningful state about the world.

Examples may include:

- Progress
- Discoveries
- Plants
- Player state
- Activities
- Rewards
- Other persistent world information

Systems can read or modify appropriate parts of world state.

World state should remain separate from presentation.

---

# 10. Simulation

Simulation systems model changes that occur over time.

The current architecture includes a WorldClock, GameLoop and SimulationSystem.

Simulation can support things such as:

- Plant growth
- Time passing
- Environmental changes
- Future world behaviour

The simulation should model meaningful causes and state changes rather than merely animating visual effects.

Simulation should remain lightweight where possible.

The project does not need to simulate reality for its own sake.

---

# 11. Content Loading

Content should be loaded through reusable content infrastructure rather than hard-coded throughout the engine.

The current architecture includes:

- ContentLoader
- ContentManager

Their role is to make content available to the systems that need it.

The long-term goal is for adding content to require as little engine modification as possible.

---

# 12. System Management

The current project uses a SystemManager to register and manage major systems.

This provides a central mechanism for systems that form part of the running engine.

The system manager should remain a coordinator rather than becoming a container for arbitrary business logic.

---

# 13. Presentation

Presentation is responsible for showing results to the child.

Examples include:

- Renderers
- UI components
- Dialogue windows
- Music Studio controls
- World views
- Visual feedback

Presentation should not own the underlying game rules.

For example:

```text
Discovery System
        ↓
Discovery State
        ↓
Presentation
```

rather than:

```text
Button click
        ↓
directly modifies discovery state
```

where that modification belongs in the underlying system.

---

# 14. Navigation

Navigation determines which part of the experience is currently being shown.

The current project includes a NavigationSystem.

Navigation should remain separate from the systems that determine what happens inside a location or activity.

Conceptually:

```text
Navigation
    ↓
Location
    ↓
Activities / World Content
```

---

# 15. World and Locations

The world provides the larger environment.

Locations provide places within that environment.

The current architecture includes:

- WorldSystem
- LocationSystem

The distinction should remain useful as the world expands.

A location can provide access to content and activities without becoming responsible for all behaviour that occurs there.

---

# 16. Activities

Activities represent things the child can do.

Examples include:

- Watering a plant
- Exploring
- Playing music
- Interacting with an object
- Performing an experiment

Activities should be data-driven where practical.

The ActivitySystem should manage activity behaviour rather than individual activities each requiring their own hard-coded system.

---

# 17. Progression

Progression represents meaningful development through the game.

Current systems include:

- ProgressSystem
- AchievementSystem
- RewardSystem

These systems should remain separate from the underlying discovery mechanism.

A discovery may result in progress or a reward, but discovery should not become tightly coupled to a particular reward implementation.

---

# 18. Save System

Persistent state should be handled by the SaveSystem rather than individual features managing their own save files or persistence rules.

This allows the save architecture to evolve independently of individual game systems.

New systems should consider what state they need to persist before implementation.

---

# 19. Discovery as a Core Architectural Capability

Discovery has emerged as one of the central architectural concepts of Noah's Seed.

It is not simply another feature.

Many future systems can use discovery:

- Instruments
- Plants
- Animals
- Seeds
- Books
- Astronomy
- Fossils
- Vehicles
- History
- Cooking
- Magic
- Hidden objects
- Rare events

The Discovery Engine should therefore be reusable across categories.

The detailed specification belongs in:

**`07 Discovery System.md`**

This document defines the place of Discovery within the overall architecture.

---

# 20. Future Architectural Capabilities

The long-term architecture may eventually support reusable capabilities such as:

- Discovery
- Collection
- Growth
- Interaction
- Conversation
- Mentoring
- Challenges
- Activities
- Knowledge
- Learning
- Memory
- Wildlife
- Events
- Achievements
- Rewards
- Experimentation
- Personalisation

These are architectural directions, not claims that every capability currently exists.

The distinction between:

**Current**

and

**Planned**

must remain explicit.

---

# 21. Current Versus Planned Architecture

Documentation must never imply that a future system is already implemented.

When describing architecture, use the following distinction:

### Current

The system or capability exists in the current codebase and is actively used.

### Emerging

The architecture is being introduced or refactored but is not yet complete.

### Planned

The architecture has been identified as useful but has not yet been implemented.

### Experimental

The idea is being explored and may change substantially.

This prevents the documentation from becoming a fictional description of the code.

---

# 22. Architecture Evolution

Noah's Seed is intentionally being built while its architecture evolves.

Architectural decisions should therefore be revisited when evidence shows that an abstraction is:

- Too specific
- Too complicated
- Duplicated
- Difficult to extend
- Difficult to understand
- Creating unnecessary dependencies

Refactoring is a normal part of development.

The project should favour early refactoring while the codebase remains small.

---

# 23. Dependency Direction

Where practical, dependencies should flow toward reusable systems rather than toward individual content.

For example:

```text
Generic Engine
      ↑
   Content
```

rather than:

```text
Generic Engine
      ↓
Hard-coded Guitar
Hard-coded Plant
Hard-coded Animal
```

The engine should not need to know every individual piece of content that exists.

---

# 24. The Engine Should Not Know Noah

The engine should support Noah's world without being hard-coded specifically around Noah.

Noah-specific information belongs in content, configuration or player/world data.

This allows the same engine to eventually support another child without rewriting the architecture.

---

# 25. The Architecture Should Encourage Discovery

The architecture itself should make it easy to add new discoveries.

Ideally, adding:

```text
Guitar
```

should not require building an entirely new subsystem.

The same architecture should eventually allow:

```text
Guitar
Plant
Butterfly
Fossil
Planet
Book
Vehicle
Magic Object
```

to become discoverable content.

This is one of the principal tests of the Discovery Engine.

---

# 26. Architectural Test

Whenever a new system or feature is proposed, ask:

### Does this have one clear responsibility?

### Can it be reused?

### Is the behaviour separated from content?

### Is the presentation separated from the underlying rules?

### Does it introduce unnecessary dependencies?

### Could an existing capability support it?

### Does it make the engine more capable?

### Could the same architecture support many future examples?

### Does it keep the game playable and understandable?

If the answers are generally positive, the architecture is likely moving in the right direction.

---

# 27. Current Architectural Direction

At the end of Pack 047, the project had reached a stable architectural milestone.

The Music Studio refactor demonstrated that:

- Responsibilities can be separated successfully.
- Orchestration can remain small.
- Reusable components can replace feature-specific logic.
- Refactoring can occur while the game remains playable.

The next architectural step is the Discovery Engine.

Pack 048 should therefore extend the existing architecture rather than introduce an unrelated architectural style.

---

# 28. Long-Term Goal

The ultimate goal is not to create an engine containing hundreds of specialised systems.

The goal is to create a relatively small number of powerful, reusable systems that can combine to produce a very large world.

The ideal relationship is:

```text
Small number of reusable capabilities
                 ↓
Large amount of varied content
                 ↓
Many possible discoveries
                 ↓
A world that feels much larger than its underlying codebase
```

The engine should provide the rules.

Content should provide the possibilities.

The child should experience the result as a world.

---

## Final Architectural Principle

> **Build the smallest reusable system that can support the largest reasonable future.**

When short-term convenience conflicts with long-term architecture, prefer the architecture that makes Noah's Seed easier to expand over the next ten years.

But do not build hypothetical complexity without a demonstrated need.

**Simple now.  
Reusable later.  
Expandable always.**