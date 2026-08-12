# Noah's Seed — Design Principles

These principles guide the design of Noah's Seed.

They are not implementation rules. They describe how the project should behave, how systems should be designed, and how decisions should be evaluated.

---

## 1. Curiosity Before Instruction

The game should create opportunities for children to become curious rather than telling them what they are supposed to learn.

Prefer:

> "I wonder what happens if..."

over:

> "Here is today's lesson."

Learning should emerge from curiosity, exploration and experimentation.

---

## 2. Discovery Is the Core Gameplay Mechanism

Discovery is more fundamental than any individual subject.

Music, gardening, animals, astronomy, mathematics, reading, history, fossils, cooking and magic can all become categories of discovery.

When a feature appears to be about one particular subject, ask whether there is a more general discovery system underneath it.

---

## 3. Systems Before Features

When a feature is proposed, look for the reusable system that the feature reveals.

For example:

**Instrument → Collectible → Discovery System**

The first implementation may be small, but the underlying architecture should be capable of supporting many future examples.

Avoid building a collection of isolated features when a reusable capability can support them.

---

## 4. Build the Simplest Useful Version First

Do not build complexity before it is needed.

Start with the smallest version that demonstrates the idea.

Once the concept works, expand it.

This allows the architecture to evolve in response to real requirements rather than hypothetical ones.

---

## 5. Every System Should Be Reusable

A system should ideally support multiple current or future features.

When designing a new system, ask:

> Could this support ten features?

Then:

> Could it support one hundred?

If not, consider whether the abstraction is too specific.

This does not mean every system must be endlessly generic.

It means unnecessary feature-specific architecture should be avoided.

---

## 6. Extend Existing Abstractions Before Creating New Ones

Before creating a new class, system or capability, ask:

> Does something that already exists provide most of what I need?

If so, extend or improve the existing abstraction rather than creating a parallel system.

This reduces duplication and keeps the architecture coherent.

---

## 7. Content and Behaviour Should Remain Separate

Content should describe what exists.

Systems should describe what things do.

For example:

A guitar should be content.

The ability to play an instrument should be a capability.

The Discovery Engine should determine how the guitar becomes discoverable.

This separation allows the world to expand without repeatedly changing the underlying engine.

---

## 8. Model Causes Rather Than Effects

Where practical, systems should model the underlying cause of something rather than simply producing the desired visual or numerical result.

For example, instead of hard-coding:

> "The plant grows on day three."

model the factors that cause growth.

This allows the same underlying system to produce different outcomes naturally.

The goal is not unnecessary simulation.

The goal is meaningful behaviour.

---

## 9. Observe Behaviour Rather Than Judge Ability

The game should observe what a child does.

It should not make premature judgements about what the child is or is not capable of doing.

Evidence might include:

- What the child chooses to explore
- What they repeatedly attempt
- What they successfully understand
- What they already know
- How they interact with increasingly complex challenges

The system should use evidence to adapt experiences rather than rigidly assigning ability based on age.

---

## 10. Adapt to Demonstrated Ability

Age can provide useful context, but demonstrated ability should be more important when determining appropriate complexity.

The game should be capable of quietly adapting:

- Reading complexity
- Mathematical challenges
- Vocabulary
- Problem-solving
- Discovery depth
- Explanations

A child should not be held back simply because their chronological age suggests a lower level of ability.

---

## 11. Personalisation Should Emerge Naturally

Personalisation should not feel like filling out a questionnaire about the child.

The world should gradually learn from interaction.

If a child repeatedly explores astronomy, the world can provide more astronomy opportunities.

If they repeatedly experiment with plants, gardening can become richer.

Personalisation should emerge from behaviour, interests and discoveries.

---

## 12. Reward Curiosity, Not Optimisation

Rewards should encourage exploration and experimentation.

The goal is not to encourage the child to optimise the game.

Avoid systems that make the child feel they must:

- Grind
- Complete repetitive tasks
- Maximise points
- Chase perfect efficiency
- Play for longer than they want

A surprising discovery can be a better reward than a numerical score.

---

## 13. Wonder Is Valuable

Not every system needs to be predictable.

Some properties can remain hidden.

Some events can be rare.

Some interactions can have unexpected outcomes.

The child does not need to understand every underlying rule.

A small amount of mystery can create powerful moments of wonder.

---

## 14. Hidden Complexity, Simple Experience

The underlying engine may become sophisticated.

The child's experience should remain simple.

The child should not need to understand:

- Rarity values
- Probability
- Internal state
- Capability architecture
- Data structures
- Progression algorithms

They should simply experience:

> "That was amazing."

Complexity belongs in the engine when it improves the experience.

It should not become the experience.

---

## 15. Experimentation Should Be Encouraged

Whenever possible, systems should allow children to combine, modify or experiment with things rather than simply following prescribed instructions.

For example:

**Rainbow Dust**

should not merely have one predetermined use.

A child might wonder:

> "What happens if I sprinkle this on an apple?"

Then:

> "What happens if I sprinkle it on a flower?"

Then:

> "What happens if I sprinkle it on a rock?"

The system should make those questions worthwhile.

---

## 16. Surprise Should Be Genuine

Surprises should emerge from systems rather than being nothing more than scripted animations.

If something has a chance of producing an unusual result, the result should be capable of feeling genuinely unexpected.

Rare events, unusual combinations and hidden properties can help create this feeling.

---

## 17. Humour Belongs in the World

Humour can make learning and exploration memorable.

It can be:

- Silly
- Unexpected
- Physical
- Verbal
- Character-driven
- Experimental

The humour should feel natural to the world rather than being inserted merely to make something educational more entertaining.

---

## 18. Calm Over Pressure

The game should generally feel safe and calm.

Avoid unnecessary:

- Timers
- Punishment
- Failure states
- Pressure
- Competitive mechanics
- Artificial urgency

Challenges can exist without making the child feel that something bad will happen if they do not succeed immediately.

---

## 19. The World Should Respond

Actions should ideally have meaningful consequences.

Planting something should change the garden.

Discovering something should change what is known.

Experimenting should sometimes produce new results.

Returning to the world should reveal that it remembers previous activity.

The child should feel that their actions matter.

---

## 20. Refactor Early

Technical debt is cheaper to address while the project is small.

If a system is becoming difficult to understand, refactor it before building more features on top of it.

A successful feature that leaves the architecture worse is not necessarily a successful implementation.

---

## 21. One Responsibility Per Class

Classes should have a clear responsibility.

If a class is simultaneously:

- Rendering
- Handling input
- Managing state
- Playing audio
- Controlling navigation

then those responsibilities should be examined for separation.

This principle should be applied pragmatically rather than mechanically.

---

## 22. Test Before Continuing

Development should follow a small feedback loop:

**Change → Test → Clean Console → Continue**

After meaningful changes:

1. Build or run the game.
2. Test the affected behaviour.
3. Check the console.
4. Fix problems before continuing.
5. Commit stable milestones.

This keeps debugging manageable and protects the playable state of the project.

---

## 23. Explain Before Abstracting

Architecture should remain understandable to the people building it.

A sophisticated abstraction is not automatically better than a simpler one.

When introducing concepts such as:

- Controllers
- Renderers
- Factories
- Registries
- Capabilities
- Dependency Injection
- Orchestrators

the purpose should be clear.

The project should become easier to understand over time, not harder.

---

## 24. Prefer Architecture That Can Grow

When two implementations both work, prefer the one that makes future expansion easier.

Ask:

> Which option makes Noah's Seed easier to expand over the next ten years?

This is the project's primary architectural tie-breaker.

---

## 25. Help Invent the Game

Noah's Seed is not being created from a fixed specification.

Some of its strongest ideas have emerged through conversation and experimentation.

The Music Studio led to the idea of instruments as discoveries.

Instruments led to collectibles.

Collectibles led to the Discovery Engine.

Rainbow Seeds evolved into Rainbow Dust.

The project should continue to allow ideas to emerge in this way.

The role of development is therefore not merely to implement predetermined features.

It is also to discover what Noah's Seed should become.

---

## Design Decision Test

When considering a new feature or architectural change, ask:

### Does it reward curiosity?

### Does it reveal a reusable system?

### Does it keep content separate from behaviour?

### Does it make future expansion easier?

### Does it preserve a simple experience for the child?

### Does it leave the project more maintainable?

### Does it make the world more interesting?

### Would we still be happy with this decision several years from now?

If the answer is generally yes, the idea is likely aligned with Noah's Seed.

---

## The Principle Behind All Principles

Noah's Seed should always favour:

**Curiosity over instruction.**

**Discovery over completion.**

**Experimentation over prescription.**

**Wonder over optimisation.**

**Systems over isolated features.**

**Long-term architecture over short-term convenience.**

**A joyful experience over a technically impressive one.**