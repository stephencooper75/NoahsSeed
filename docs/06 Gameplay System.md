# Noah's Seed — Gameplay Systems

## Purpose

Gameplay Systems define the reusable mechanisms through which the child interacts with the world.

They sit between the underlying engine architecture and the specific content of the world.

Examples include:

- Progression
- Rewards
- Collections
- Inventory
- Activities
- Exploration
- Dynamic Actions
- Garden behaviour
- Travel
- World Memory

Gameplay systems should remain reusable and should avoid becoming tightly coupled to individual pieces of content.

---

# 1. Gameplay Philosophy

Gameplay should create opportunities for:

- Exploration
- Discovery
- Experimentation
- Creativity
- Learning
- Collection
- Achievement
- Personal growth

The child should feel that they are building their own relationship with the world.

Gameplay should not be primarily about completing a predetermined sequence of tasks.

---

# 2. Exploration

Exploration is the act of moving through the world and encountering places, objects, characters, activities and events.

Exploration should provide opportunities for discovery.

A location should not merely be a screen containing buttons.

It should provide things worth investigating.

Examples include:

- Home
- Garden
- Train Station
- Goolwa
- Victor Harbor
- Future locations

As the world expands, exploration should become richer without requiring a fundamentally different navigation system.

---

# 3. Activities

Activities represent things the child can deliberately do.

Examples include:

- Planting seeds
- Watering plants
- Reading
- Playing music
- Exploring
- Performing experiments
- Solving challenges
- Interacting with objects

Activities should be reusable and data-driven where practical.

An activity should define what the child can do.

The underlying ActivitySystem provides the behaviour.

---

# 4. Dynamic Actions

The player should only be presented with actions that make sense given the current state of the world.

Actions are therefore not necessarily static.

They can emerge from the simulation.

For example:

```text id="w1b7q3"
Empty Garden
    ↓
Plant Seed
```

After a seed is planted:

```text id="v3j1o8"
Seed Planted
    ↓
Gently Water Seed
Observe Seed
```

As the plant develops:

```text id="b6u0e5"
Young Tree
    ↓
Water Tree
Examine Leaves
```

Later:

```text id="m7d4k2"
Fruit Tree
    ↓
Harvest Fruit
Water Tree
```

The world determines what is possible.

The player chooses from meaningful possibilities.

This system should eventually work across many types of content rather than being limited to gardening.

---

# 5. Events

Events are different from actions.

An action is something the player chooses to do.

An event is something that happens within the world.

Examples include:

- A bird lands nearby.
- A ladybird appears.
- A butterfly visits.
- A worm is discovered.
- Rain begins.
- A rare object appears.
- A character arrives.
- A special event occurs.

Events may be caused by:

- Simulation
- Time
- World state
- Player actions
- Discovery
- Location
- Random or weighted chance

Events can create new opportunities for interaction or discovery.

---

# 6. Progression

Progression represents meaningful development through the game.

Progress should reflect things the child has experienced, learned, explored or discovered.

Possible progression dimensions include:

- Exploration
- Nature
- Reading
- Mathematics
- Science
- Creativity
- Music
- Discovery

The exact progression model should evolve as the game develops.

Progression should not become a requirement to enjoy the world.

---

# 7. Experience

Experience points may eventually be used to represent accumulated activity or progress.

Potential sources include:

- Activities
- Discoveries
- Exploration
- Learning
- Experimentation
- Meaningful interactions

XP should be treated as an optional representation of progress rather than the fundamental purpose of gameplay.

The child should experience the world rather than feel that they are grinding for XP.

---

# 8. Levels

Levels can represent growth within particular areas.

Possible future examples include:

- Nature Level
- Reading Level
- Mathematics Level
- Science Level
- Creativity Level
- Exploration Level
- Music Level

Levels may eventually influence:

- Available experiences
- Complexity
- Presentation
- Recognition
- Rewards

However, levels should not unnecessarily restrict curiosity.

A child should sometimes be able to encounter things simply because they explored.

---

# 9. Rewards

Rewards acknowledge meaningful progress, achievement or discovery.

Possible rewards include:

- Badges
- Certificates
- Medals
- Trophies
- Rare objects
- Magical objects
- New experiences
- New opportunities

Rewards should preferably be tangible or meaningful rather than simply numerical.

Discovery itself can also be a reward.

---

# 10. Reward Evolution

Some rewards may evolve over time.

For example:

```text id="c7p2h9"
Garden Badge

Early
    Bronze

Later
    Silver

Later
    Gold

Exceptional
    Diamond / Magical
```

The underlying reward can remain the same while its presentation or state changes.

This should be implemented through reusable reward data and progression rather than individual hard-coded badge systems.

---

# 11. Reward Presentation

Rewards may be displayed in the world.

For example, the bedroom could contain a display area for:

- Garden achievements
- Reading achievements
- Science achievements
- Discovery achievements
- Rare collectibles

The display becomes a visible history of the child's journey.

It should feel like part of the world rather than a conventional achievement screen.

---

# 12. Collections

Collections represent things the child has encountered, discovered or accumulated.

Examples include:

- Discoveries
- Instruments
- Plants
- Animals
- Books
- Fossils
- Rocks
- Rewards

A collection does not necessarily mean the child physically owns an object.

A discovery can simply be something the child has encountered and recorded.

This distinction becomes particularly important as the Discovery System develops.

---

# 13. Inventory

An inventory represents things the child actually possesses or can use.

Examples include:

### Garden

- Seeds
- Fertiliser
- Gardening supplies
- Tools

### Travel

- Tickets
- Passes
- Vouchers

### Other

- Books
- Toys
- Objects
- Experimental materials

The inventory should not be used as a generic replacement for the Discovery System.

Something can be:

```text id="m8x3c1"
Discovered
```

without necessarily becoming:

```text id="p4v7n2"
Inventory
```

---

# 14. Currency

The world may eventually contain currencies or exchange mechanisms.

Possible examples include:

- Coins
- Tokens
- Tickets
- Passes
- Vouchers

Different systems may use different forms of exchange.

For example:

```text id="7d0m4s"
Garden
    → Coins

Travel
    → Tickets

Attraction
    → Ride Tickets
```

Currency should only be introduced where it creates meaningful gameplay.

The project should avoid unnecessary economic systems simply because conventional games use them.

---

# 15. Garden System

The garden is a major example of a living gameplay system.

The garden should grow with the child.

It can provide:

- Planting
- Growth
- Observation
- Experimentation
- Discovery
- Collection
- Environmental interaction

The garden should demonstrate how a relatively simple system can produce a rich experience through reusable mechanics.

---

# 16. Seeds

Seeds are content that can be planted.

Seeds may differ in:

- Species
- Appearance
- Growth behaviour
- Environmental requirements
- Rarity
- Discovery relationships
- Possible outcomes

Examples may range from ordinary plants to unusual or magical seeds.

The underlying planting and growth mechanisms should remain reusable.

---

# 17. Plant Growth

Plants can change over time.

Possible states include:

```text id="q5r2j8"
Seed
    ↓
Sprout
    ↓
Growing Plant
    ↓
Flowering Plant
    ↓
Harvest / Mature State
```

Growth can potentially be influenced by:

- Water
- Fertiliser
- Weather
- Plant properties
- Care
- Time

The exact simulation should remain as simple as practical.

The purpose is to create meaningful world behaviour, not to simulate botany in unnecessary detail.

---

# 18. Garden Expansion

The garden can gradually become more capable.

Possible future improvements include:

- Additional planting areas
- Better tools
- Garden beds
- Greenhouse
- New growing environments

Expansion should create new possibilities rather than simply increasing numerical capacity.

---

# 19. Garden Supplies

Garden supplies may modify gameplay.

Examples include:

- Fertiliser
- Plant food
- Pest protection
- Watering tools

Supplies should have meaningful effects within the garden system.

They should not exist merely as additional inventory items.

---

# 20. Pests and Environmental Problems

Plants may encounter environmental challenges.

Possible examples include:

- Snails
- Caterpillars
- Ants
- Grasshoppers
- Weather effects

Protection or experimentation may provide different solutions.

These systems should remain optional and calm.

They should not turn gardening into a stressful maintenance obligation.

---

# 21. Pets

Pets are a future gameplay system.

A pet may have:

- Health
- Happiness
- Hunger
- Care needs
- Personality
- Relationships

Potential interactions may include:

- Feeding
- Playing
- Caring
- Observing
- Exploring together

Pet behaviour should eventually use reusable systems rather than a specialised implementation for each animal.

---

# 22. Travel

Travel allows the child to move between locations.

A simple travel sequence might be:

```text id="u2r9k4"
Choose destination
    ↓
Travel
    ↓
Arrive
    ↓
Explore
```

Travel can eventually involve:

- Trains
- Buses
- Cars
- Boats
- Aircraft
- Spacecraft

The Cockle Train is an example of content that could use the reusable travel architecture.

---

# 23. Meaningful Travel

Travel should be more than a loading screen between locations.

It can provide opportunities for:

- Observation
- Conversation
- Discovery
- Rare events
- New scenery
- Educational context

However, travel should remain optional and enjoyable.

---

# 24. World Memory

The world should remember meaningful player actions.

Examples include:

- Plants remain where planted.
- Rewards remain displayed.
- Collections grow.
- Discoveries are recorded.
- Locations change.
- Relationships develop.
- Previous actions influence future possibilities.

The goal is for the child to feel:

> **This is my world.**

---

# 25. World Persistence

Persistent gameplay state should be handled through the SaveSystem and appropriate state-owning systems.

Gameplay systems should not each invent their own unrelated persistence mechanisms.

Examples of persistent state may include:

- Plant state
- Inventory
- Discoveries
- Progress
- Rewards
- Achievements
- World changes
- Relationships

---

# 26. Gameplay and Discovery

Discovery should remain distinct from conventional progression.

A child should not have to:

```text
Reach Level 10
    ↓
Unlock Guitar
```

simply because traditional game design uses levels that way.

Instead:

```text id="w4k8p2"
Explore
    ↓
Encounter
    ↓
Discover Guitar
    ↓
Learn
    ↓
Collect
    ↓
Experiment
```

Progression and rewards can respond to the discovery.

They should not necessarily control whether the child is allowed to be curious.

The detailed architecture belongs in:

**`07 Discovery System.md`**

---

# 27. Gameplay Should Support Experimentation

Gameplay systems should provide opportunities to combine things and observe outcomes.

For example:

```text id="h3q9m1"
Rainbow Dust
    +
Apple
    ↓
Possible unusual result
```

or:

```text id="f8k2r6"
Rainbow Dust
    +
Flower
    ↓
Possible unusual result
```

The purpose is not to provide a list of recipes.

The purpose is to encourage the child to ask:

> **What happens if I try this?**

---

# 28. Rare Events

Rare events can create memorable moments.

Examples include:

- Unusual wildlife
- Strange weather
- Rare discoveries
- Hidden objects
- Unexpected transformations
- Special visitors
- Unusual combinations

Rare events should be carefully designed so that missing one does not create anxiety.

The child should feel delighted when something unusual happens, not pressured to check constantly.

---

# 29. Calm Gameplay

Gameplay systems should generally avoid unnecessary pressure.

Prefer:

- Exploration
- Choice
- Experimentation
- Observation
- Gentle challenges

Avoid unnecessary reliance on:

- Timers
- Punishment
- Failure
- Artificial urgency
- Competitive pressure

Difficulty can exist without creating stress.

---

# 30. Gameplay System Boundaries

Gameplay systems should not absorb responsibilities belonging elsewhere.

For example:

```text id="e9s3q7"
Discovery
    → DiscoverySystem

Growth
    → NatureSystem

Progress
    → ProgressSystem

Rewards
    → RewardSystem

Achievements
    → AchievementSystem

Saving
    → SaveSystem

Navigation
    → NavigationSystem
```

Gameplay systems coordinate these capabilities where appropriate.

They should not duplicate their behaviour.

---

# 31. Extensibility

A new gameplay feature should ideally be achievable by combining existing systems and adding content.

For example:

```text id="b2n6t8"
New Instrument
    +
Discoverable
    +
Collectible
    +
Playable
    ↓
Existing systems
```

rather than:

```text id="x7m4p1"
New Instrument
    ↓
New Instrument System
    ↓
New Instrument Save System
    ↓
New Instrument Reward System
    ↓
New Instrument Discovery System
```

The second approach creates unnecessary duplication.

---

# 32. Gameplay System Test

When adding a gameplay feature, ask:

### What is the player actually doing?

### Which existing system should own that behaviour?

### Is this an activity, action, event, discovery, reward or collection?

### Does the world state affect what is possible?

### Should the result persist?

### Can the mechanism be reused?

### Does the feature encourage curiosity?

### Does it create meaningful choices?

### Does it remain calm and enjoyable?

### Is a new system genuinely required?

---

# 33. Long-Term Goal

The goal is not to accumulate hundreds of gameplay systems.

The goal is to build a small number of reusable systems that can combine to create many different experiences.

For example:

```text id="p8c4r2"
Discovery
+
Activities
+
Capabilities
+
World State
+
Simulation
+
Rewards
+
Presentation
        ↓
Many different gameplay experiences
```

The underlying systems should remain relatively simple.

The content and combinations should create richness.

---

## Final Principle

> **The world determines what is possible. The child chooses what to explore.**

Gameplay systems should make that relationship feel natural.

The child should not feel that they are operating a collection of game mechanics.

They should feel that they are exploring a world that responds to what they do.