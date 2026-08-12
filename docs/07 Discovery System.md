# Noah's Seed — Discovery System

## Purpose

The Discovery System is a reusable engine subsystem responsible for turning exploration, interaction and experimentation into discoveries.

Discovery is one of the central gameplay mechanisms of Noah's Seed.

The system must not be designed specifically for music or instruments.

It should eventually support almost anything that can meaningfully be discovered within the world.

Examples include:

- Plants
- Animals
- Instruments
- Seeds
- Magic
- Vehicles
- Books
- Astronomy
- History
- Fossils
- Cooking
- Objects
- Experiences
- Hidden locations
- Rare events
- Other future content

The Discovery System is therefore intended to become one of the most reusable systems in the game.

---

# 1. Discovery Is the Core Loop

The emerging core gameplay loop is:

```text
Explore
   ↓
Discover
   ↓
Learn
   ↓
Collect
   ↓
Experiment
   ↓
Unlock
   ↓
Explore again
```

The terminology and implementation of this loop may evolve.

The important principle is that discovery creates the reason to continue exploring.

The child should feel:

> "I wonder what I'll discover next?"

rather than:

> "What do I need to complete next?"

---

# 2. Discovery Rather Than Unlocking

Noah's Seed should increasingly think in terms of **discovering** things rather than **unlocking** things.

Traditional game progression might work like:

```text
Reach Level 5
    ↓
Unlock Guitar
```

The Discovery System should instead support:

```text
Explore
    ↓
Encounter
    ↓
Discover Guitar
    ↓
Learn about Guitar
    ↓
Add to Discoveries
    ↓
Use / Experiment
```

The child experiences the guitar as something they found, not something the game awarded because a numerical requirement was met.

Progression and rewards may still respond to discoveries.

They should not necessarily determine whether something can be discovered.

---

# 3. Discovery Is Data

Discoverable things should be represented as data rather than requiring a specialised hard-coded system for every category.

A simplified discovery definition might contain:

```text
{
    "id": "guitar",
    "category": "instrument",
    "rarity": 120,
    "discoverable": true,
    "educationalText": "...",
    "unlock": "music:guitar"
}
```

This example is conceptual.

The final schema should be determined during Pack 048 implementation.

The important principle is:

> A guitar is content. The Discovery System provides the reusable discovery behaviour.

---

# 4. Discovery Categories

The Discovery System should not contain a fixed list of every possible category.

Categories should be data.

Potential categories include:

```text
instrument
plant
animal
seed
vehicle
book
astronomy
history
fossil
food
magic
object
experience
location
event
```

Future categories should be possible without redesigning the Discovery Engine.

---

# 5. Discovery Definition

A Discovery Definition describes something that can potentially be discovered.

Possible properties include:

- Identifier
- Name
- Category
- Description
- Discoverability
- Rarity
- Educational content
- Capabilities
- Discovery conditions
- Experimentation behaviour
- Result relationships
- Presentation information

Not every discovery needs every property.

The data model should remain flexible.

---

# 6. Discovery State

The system must distinguish between:

### Undiscovered

The player has not yet encountered or identified the discovery.

### Discovered

The player has successfully discovered it.

### Experienced

The player has encountered or interacted with it, where that distinction is meaningful.

### Collected

The player has added it to an appropriate collection.

### Experimented

The player has used or combined it in an experiment.

These states should not automatically be treated as identical.

For example, a child may discover a butterfly without physically collecting it.

---

# 7. Discovery Record

A discovery record represents the player's relationship with a discovery.

It may eventually contain information such as:

```text
discoveryId
discovered
discoveredAt
location
discoveryMethod
timesEncountered
timesExperimented
```

The final persistence model will be determined during implementation.

The system should retain only information that creates meaningful gameplay value.

---

# 8. Discovery Conditions

Discoveries may have conditions that determine when or how they can appear.

Possible conditions include:

- Location
- Time
- Season
- Weather
- Previous discoveries
- Player actions
- Existing world state
- Other content
- Experimentation
- Random or weighted chance

Conditions should be reusable.

The system should avoid creating a separate discovery algorithm for every individual discovery.

---

# 9. Discovery Through Exploration

Exploration should be one of the primary ways discoveries occur.

A child might:

```text
Explore Garden
    ↓
Notice something unusual
    ↓
Investigate
    ↓
Discover Ladybird
```

or:

```text
Explore Music Studio
    ↓
Find Old Guitar
    ↓
Discover Guitar
```

The system should support discoveries emerging naturally from the world.

---

# 10. Discovery Through Interaction

Discovery does not always require wandering into the correct location.

A child may discover something by interacting with existing content.

Examples include:

```text
Examine Plant
    ↓
Discover Caterpillar
```

```text
Open Old Box
    ↓
Discover Instrument
```

```text
Read Book
    ↓
Discover Historical Person
```

The system should therefore be capable of receiving discovery opportunities from other gameplay systems.

---

# 11. Discovery Through Experimentation

Experimentation is an important source of discovery.

A child should sometimes be able to discover something because they tried something unexpected.

The system should support relationships such as:

```text
Thing A
    +
Thing B
    ↓
Possible Discovery
```

This should not necessarily behave like a conventional recipe system.

The purpose is experimentation rather than following instructions.

---

# 12. Rainbow Dust

Rainbow Dust is an important example of the intended experimentation philosophy.

Rainbow Dust can potentially be sprinkled onto many things.

Possible outcomes include:

- Rainbow Apples
- Rainbow Flowers
- Rainbow Ladybirds
- Rainbow Trees
- Rainbow Fish
- Rainbow Rocks

The system should allow experimentation without requiring the child to know the intended combination in advance.

The child should be encouraged to wonder:

> "What happens if I sprinkle Rainbow Dust on this?"

rather than:

> "What is the correct recipe?"

Rainbow Dust is therefore an example of how Discovery, Experimentation and Hidden Wonder can interact.

---

# 13. Rarity

Rarity is an internal property of a discovery.

The engine should not store presentation labels such as:

- Legendary
- Epic
- Rare

as the fundamental game-logic representation.

Instead, rarity should be represented numerically or through another machine-readable value.

For example:

```text
rarity = 487
```

The number itself is an engine property.

Presentation determines how that property is communicated.

---

# 14. Rarity and Presentation

The same underlying rarity may eventually be presented differently depending on context.

For example:

```text
Age 7
    → "Super Duper!"

Age 15
    → "Mythical"

Adult
    → "Legendary"
```

The exact presentation vocabulary is not yet fixed.

The architectural principle is:

> Game logic stores the underlying value. Presentation decides what the player sees.

This keeps the Discovery System independent from age-specific language and presentation.

---

# 15. Hidden Wonder

Not every property of a discovery needs to be visible to the child.

Possible hidden properties include:

- Rarity
- Wonder
- Magic
- Discoverability
- Activation chance
- Uniqueness
- Other internal modifiers

These properties can create unexpected outcomes.

The child should experience the result without needing to understand the underlying numbers.

---

# 16. Hidden Properties Must Have Purpose

Hidden properties should exist because they improve the experience.

They should create:

- Surprise
- Wonder
- Discovery
- Experimentation
- Replayability
- Unexpected combinations

They should not exist merely because the engine can store more numbers.

The guiding question is:

> Does this hidden property make the world more interesting?

---

# 17. Rare Discoveries

Some discoveries should be uncommon.

A rare discovery can create a memorable moment.

Examples might include:

- Unusual wildlife
- Rare plants
- Special instruments
- Hidden objects
- Magical items
- Unusual events
- Exceptional versions of ordinary discoveries

Rarity should create delight rather than anxiety.

A child should never feel that they must constantly check the game or risk missing something important.

---

# 18. Discovery and Learning

Discovery should naturally create opportunities for learning.

A discovery can provide educational information appropriate to the child.

For example:

```text
Discover Guitar
    ↓
Learn what a guitar is
    ↓
Explore how it produces sound
    ↓
Experiment in Music Studio
```

Or:

```text
Discover Fossil
    ↓
Learn about fossils
    ↓
Learn about ancient life
    ↓
Explore related discoveries
```

Learning should remain complementary to discovery.

The Discovery System should not become a lesson-delivery system.

---

# 19. Educational Content

A discovery may contain or reference educational content.

Possible information includes:

- Description
- Facts
- Vocabulary
- Related concepts
- Questions
- Further discoveries

Educational content should be appropriate to the player's demonstrated ability and context.

The Discovery System should provide the connection.

The Learning System determines how educational content is adapted.

---

# 20. Discovery and Collection

A discovery may become part of the player's collection.

However:

> Discovery does not equal inventory.

A player can discover something without owning it.

Examples:

```text
Discover Butterfly
    ↓
Recorded in My Discoveries
```

rather than:

```text
Discover Butterfly
    ↓
Added to Inventory
```

This distinction should remain fundamental.

---

# 21. My Discoveries

The player-facing concept should preferably be something such as:

**My Discoveries**

or:

**Book of Discoveries**

rather than:

- Inventory
- Collectibles
- Unlocks

The purpose is to reinforce the player's mental model:

> "These are things I discovered."

rather than:

> "These are things I collected because the game gave them to me."

The final interface terminology remains open for future design.

---

# 22. Discovery and Unlocking

Some discoveries may unlock new capabilities or experiences.

For example:

```text
Discover Old Guitar
    ↓
Learn about Guitar
    ↓
Guitar becomes available in Music Studio
```

This is still a discovery.

The fact that discovering it makes something else available should be considered a consequence of discovery rather than the primary purpose.

---

# 23. Discovery and Music

Music is the first major category through which the Discovery System will be demonstrated.

Current instruments include:

- Piano
- Guitar
- Violin
- Drums
- Fartophone

The current Music Studio is functional.

The next architectural step is to make instruments discoverable through the Discovery System rather than treating them as isolated hard-coded features.

---

# 24. Guitar — First Discovery

The first implementation target is:

**Guitar**

The guitar should be represented through the Discovery System.

It should not require a specialised Guitar Discovery System.

Conceptually:

```text
Guitar Definition
       ↓
Discovery System
       ↓
Player discovers Guitar
       ↓
Discovery recorded
       ↓
Music capability becomes available
```

The exact implementation will be defined during Pack 048.

---

# 25. Future Instruments

Once Guitar works through the new architecture, the same system should support:

- Violin
- Drums
- Fartophone

without creating separate discovery implementations.

For example:

```text
Guitar
Violin
Drums
Fartophone
        ↓
Same Discovery System
```

This is an early test of whether the abstraction is genuinely reusable.

---

# 26. Instrument Evolution

The current instruments are placeholders for a broader long-term model.

A future progression could include:

```text
Old Guitar
    ↓
Acoustic Guitar
    ↓
Electric Guitar
    ↓
Fender Stratocaster
```

Each can be a separate discovery.

The Music Studio can respond to what has been discovered.

The Discovery System does not need to know how the Music Studio implements the instrument.

---

# 27. Discovery and Existing Systems

Discovery should integrate with existing systems rather than replacing them.

Potential relationships include:

```text
Exploration
    ↓
Discovery

Discovery
    ↓
Learning

Discovery
    ↓
Collection

Discovery
    ↓
Progress

Discovery
    ↓
Reward

Discovery
    ↓
Music / Garden / Other capabilities
```

The Discovery System should remain the authority for discovery state.

Other systems can respond to discovery events or results.

---

# 28. Discovery Events

The Discovery System should eventually be capable of producing meaningful events.

A conceptual example is:

```text
discovery_made
```

with information identifying the discovery and relevant context.

Other systems may respond.

For example:

```text
Discovery System
      ↓
discovery_made
      ↓
Learning System
      ↓
Progress System
      ↓
Reward System
      ↓
Presentation
```

The exact event model will be determined during implementation.

---

# 29. Discovery Presentation

The Discovery System should not own all presentation.

It should provide the underlying discovery result.

Presentation determines how the discovery is shown.

Possible presentation elements include:

- Discovery popup
- Animation
- Sound
- Dialogue
- Book of Discoveries update
- New Music Studio item
- Educational information
- Celebration

The presentation should remain separate from discovery logic.

---

# 30. Discovery Should Feel Special

Discovering something should feel different from simply clicking a button.

The experience may eventually include:

- Anticipation
- Visual reveal
- Sound
- Character reaction
- Educational information
- Collection update
- New possibility

The exact presentation can evolve independently from the Discovery Engine.

---

# 31. Discovery Should Not Become a Checklist

A discovery collection can be useful.

But the child should not feel compelled to complete it.

The system should avoid turning:

> "I wonder what I'll find?"

into:

> "I must find every item."

Completionism should never become more important than curiosity.

---

# 32. Discovery and Surprise

The system should support discoveries that are:

- Expected
- Unusual
- Rare
- Hidden
- Experimental
- Emergent

A predictable discovery can be satisfying.

An unexpected discovery can create wonder.

Both have a place.

---

# 33. Discovery and Repetition

Repeated encounters with the same thing may still be meaningful.

A child might:

- Encounter the same animal again
- Find another plant
- Play the same instrument
- Discover another example of a known category

The system should distinguish between:

**first discovery**

and

**subsequent encounters**

when that distinction adds value.

Repeated experiences can contribute to knowledge, relationships or experimentation without being counted as entirely new discoveries.

---

# 34. Discovery Identity

Each discoverable item should have a stable identifier.

For example:

```text
guitar
violin
drums
fartophone
rainbow_dust
```

The identifier should remain stable even if the presentation changes.

This allows systems to refer to discoveries without depending on display names.

---

# 35. Discovery Data Should Remain Extensible

The system should be capable of supporting new properties without requiring every existing discovery to be rewritten.

Possible future properties include:

- Category
- Rarity
- Wonder
- Magic
- Experimentation
- Relationships
- Educational content
- Presentation
- Discovery conditions

The final schema should evolve from real requirements rather than speculative complexity.

---

# 36. Discovery Engine Boundaries

The Discovery System should be responsible for:

- Discovery definitions
- Discovery state
- Discovery conditions
- Discovery events
- Recording discoveries
- Determining whether something has been discovered
- Providing discovery information to other systems

It should not become responsible for:

- Rendering
- Music playback
- Plant simulation
- Navigation
- Saving implementation details
- Learning adaptation
- Reward presentation

Those responsibilities belong to other systems.

---

# 37. Discovery and Persistence

Discovery state must eventually persist.

If Noah discovers a guitar, the game should remember that discovery.

The Discovery System should own discovery state while the SaveSystem provides the persistence mechanism.

Conceptually:

```text
Discovery System
      ↓
Discovery State
      ↓
Save System
      ↓
Persistent Save Data
```

The Discovery System should not implement a separate save mechanism.

---

# 38. Discovery and Personalisation

Discovery history can become useful evidence about the child's interests.

For example:

```text
Repeated astronomy discoveries
        ↓
Evidence of astronomy interest
```

or:

```text
Repeated plant experimentation
        ↓
Evidence of interest in gardening
```

The Discovery System should record meaningful discovery information.

The Learning/Personalisation systems can use that information.

The Discovery System should not become the owner of the child's complete learning profile.

---

# 39. Discovery as a General Engine

The strongest test of the Discovery System is whether it can support radically different categories without redesign.

For example:

```text
Guitar
Plant
Butterfly
Fossil
Planet
Book
Vehicle
Magic Dust
```

If all of these can use the same fundamental discovery architecture, the system is sufficiently general.

---

# 40. Pack 048 Implementation Target

Pack 048 should not attempt to build the complete long-term Discovery Engine.

It should establish the architecture and prove it with the smallest useful implementation.

The first target is:

```text
Discovery Engine
       ↓
Guitar
       ↓
Discover Guitar
       ↓
Record Discovery
       ↓
Make Guitar available to Music Studio
```

Once this works, the architecture should be tested with:

```text
Violin
Drums
Fartophone
```

without creating new discovery logic for each.

---

# 41. Implementation Discipline

Pack 048 should follow the established development workflow:

```text
One responsibility
        ↓
Implement
        ↓
Test
        ↓
Clean console
        ↓
Commit
        ↓
Continue
```

The Discovery Engine should not be implemented as one large multi-file change.

The first implementation should be deliberately small.

---

# 42. Architectural Test

Before accepting the Discovery Engine, ask:

### Can Guitar be discovered without hard-coded Guitar-specific discovery logic?

### Can Violin use the same mechanism?

### Can Drums use the same mechanism?

### Can Fartophone use the same mechanism?

### Can a Plant eventually use the same mechanism?

### Can an Animal eventually use the same mechanism?

### Can a Fossil eventually use the same mechanism?

### Can a magical object use the same mechanism?

### Is discovery state separate from presentation?

### Is rarity separate from presentation?

### Is discovery separate from inventory?

### Is discovery separate from progression?

### Is discovery state persistable?

### Can other systems respond to discoveries without owning discovery logic?

If the answer is yes, the architecture is likely on the right path.

---

# 43. Long-Term Vision

The Discovery System is intended to become one of the central pieces of Noah's Seed.

The ultimate goal is for almost anything interesting in the world to be capable of becoming a discovery.

The child should gradually build a personal history of things they have encountered.

Not merely:

> "I completed the game."

But:

> "Look what I found."

---

## Final Principle

> **The child should experience discovery, not the machinery of discovery.**

The engine can contain rarity, probability, hidden properties, conditions and state.

The child should experience:

**curiosity → surprise → discovery → wonder → learning → experimentation**

The Discovery System exists to make that experience possible across the entire world of Noah's Seed.