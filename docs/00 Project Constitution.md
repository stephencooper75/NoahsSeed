# Noah's Seed Project Constitution

## Mission

Noah's Seed is a living world designed to grow alongside children and families.

Its purpose is to create a safe, engaging world where curiosity, exploration, discovery, creativity and learning can develop naturally through play.

The project has two related goals:

1. Create a magical, enjoyable world specifically designed around Noah's interests and abilities.
2. Build a flexible engine capable of supporting personalised worlds for other children and families in the future.

Noah's World is the first content world, not a limitation of the engine.

---

## The Engine

Noah's Seed is not simply a collection of features.

The engine defines how the world works.

Content defines what exists within that world.

The engine should therefore remain independent of any particular child, family, location, activity, educational pathway or item of content.

Every implementation should leave the engine more capable than it was before.

---

## Reusable Systems Before Individual Features

Individual features should reveal reusable systems.

We should not build a system specifically for one isolated feature when a more general capability can support many future features.

Examples:

- A Tesla encounter should reveal a reusable vehicle or encounter capability.
- An Einstein character should reveal a reusable mentor capability.
- A go-kart race should reveal a reusable challenge capability.
- A guitar should reveal a reusable discovery and instrument capability.

Features are examples of systems in action.

The architecture should favour reusable capabilities over feature-specific implementations.

---

## Behaviour Belongs in Code. Content Belongs in Data.

Rules, systems, behaviours and interactions belong in the engine.

Names, locations, activities, characters, educational material, families, worlds and other content belong in data wherever practical.

Changing content should rarely require changing engine code.

The engine should provide the capabilities.

Content should determine how those capabilities are used.

---

## Design for Every Family

The engine must never assume a particular household arrangement.

It should be capable of supporting circumstances such as:

- One home
- Two homes
- Shared care
- Single parents
- Grandparents
- Foster families
- Guardians
- Other family structures

The world can be personalised through data without embedding assumptions about a particular family into the engine.

---

## The World Grows With the Child

The world should begin small and familiar.

As a child develops, the world can naturally expand to include new places, ideas, activities, experiences and knowledge.

The engine should support years of growth without requiring fundamental redesign.

---

## Curiosity Drives Discovery

Children learn through curiosity.

The world should create opportunities for the child to ask:

> What is that?

> How does that work?

> Why did that happen?

The answer should follow the question.

Discovery should therefore be a central mechanism through which exploration, learning and progression occur.

---

## Readiness Is More Important Than Age

Age may influence the complexity of educational content, but it should rarely determine what a child is capable of exploring.

The engine should consider demonstrated behaviour and factors such as:

- Interests
- Reading ability
- Mathematical ability
- Previous exploration
- Demonstrated understanding
- Learning pace
- Parent or caregiver preferences

Every child develops differently.

Education should adapt to demonstrated behaviour rather than simply chronological age.

---

## The World Adapts to the Child

The child should not have to adapt to a rigid game.

The world should gradually learn about the child's:

- Interests
- Abilities
- Preferred activities
- Learning pace
- Previous discoveries

A child fascinated by astronomy should naturally encounter more opportunities related to astronomy.

A child fascinated by vehicles should naturally encounter more vehicle-related opportunities.

Personalisation should emerge through data and systems rather than hard-coded assumptions.

---

## Keep the World Personal

The first priority is creating a magical and enjoyable world specifically designed around Noah.

Commercial possibilities are secondary.

The architecture should be general enough to support other children in the future, but generalisation should never compromise Noah's experience.

The engine should be generic.

The content should make each world personal.

---

## Learning Complements Parents and Teachers

Noah's Seed should complement parents, caregivers and teachers.

It does not replace them.

The system can provide experiences, opportunities for exploration, knowledge and adaptive challenges, but the child remains part of a real-world family and learning environment.

---

## The World Should Feel Alive

The world should remember and change.

Examples include:

- A planted seed grows.
- A mentor remembers conversations.
- A pet develops personality.
- A location changes over time.
- Discoveries become part of the child's history.

The child should feel that they are returning to a living world rather than opening a collection of disconnected screens.

---

## Wonder Over Optimisation

The goal is not to maximise:

- Points
- Levels
- Screen time
- Rewards

The goal is to create:

- Curiosity
- Creativity
- Confidence
- Discovery
- Joy
- A desire to explore further

Technology serves the experience.

The experience does not serve the technology.

---

## Start Simple

Every new feature should begin as the simplest version that works.

Complexity should emerge gradually rather than being designed in unnecessarily from the beginning.

Small, well-designed systems are easier to understand, maintain, test and expand.

The project should remain playable throughout development.

---

## Think Long Term

Whenever making a design decision, ask whether it will still make sense years from now.

Avoid shortcuts that create unnecessary limitations later.

Prefer solutions that allow the project to expand naturally.

The architecture should support future content that has not yet been imagined.

---

## Architecture Independence

The engine should be capable of supporting:

- Multiple homes
- Multiple caregivers
- Different learning environments
- Different educational pathways
- Different interests
- Different cultures
- Different languages
- Different abilities
- Future content that has not yet been imagined

The engine should remain independent.

Content provides the personality.

---

## Guiding Questions

Whenever making a significant design decision, ask:

> **Does this reward curiosity?**

And:

> **What reusable system does this reveal?**

And:

> **Will this still work for a different child, a different family, and five years from now?**

And:

> **Does this leave the engine more capable than it was before?**

If the answer is generally yes, the decision is probably moving Noah's Seed in the right direction.

---

## Long-Term Principle

Noah's Seed should not merely become a collection of increasingly sophisticated features.

It should become an engine for curiosity.

Every future system should contribute to a world in which children want to:

**Explore → Discover → Learn → Collect → Experiment → Unlock → Explore again.**

The terminology and implementation of that loop may evolve, but the underlying philosophy should remain central to the project.