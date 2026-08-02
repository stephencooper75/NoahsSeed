# Noah's Seed
## World Rendering Architecture

Version: 1.0

---

# Purpose

The purpose of the World Rendering Architecture is to define how the child experiences Noah's Seed.

The engine manages data.

The renderer presents that data.

The renderer should never contain game logic.

It simply displays the current state of the world.

---

# Core Principle

> The engine knows what exists.
> The renderer decides how it looks.

Example:

Engine

Tree
Growth Stage = Young Tree

Renderer

🌿 Young Tree

Tomorrow the renderer may instead display:

• Pixel art

• Hand drawn artwork

• 3D graphics

• Animated sprites

without changing the engine.

---

# Engine / Renderer Separation

Engine Responsibilities

• World state

• Entity state

• Progress

• Inventory

• Learning

• NPC behaviour

• Rules

Renderer Responsibilities

• Drawing the world

• Animations

• Camera

• User Interface

• Visual effects

• Sounds

The renderer never changes the game directly.

All interaction is passed back to the engine.

---

# The World

The player should feel they are inside one continuous world.

The renderer presents:

Sky

Ground

Buildings

Trees

NPCs

Player

Weather

Animals

Objects

The child interacts with the world itself rather than navigating menus.

---

# The Camera

Initially the camera may remain fixed.

Future versions may support:

• Smooth scrolling

• Zoom

• Follow player

• Cinematic movement

The engine should not depend on the camera.

---

# Player Representation

The player is represented by an avatar.

The avatar is separate from the player's identity.

Player Identity

• Name

• Photo

• Preferences

Player Avatar

• Appearance

• Clothing

• Position

• Animation

This separation allows the avatar to evolve without affecting saved player information.

---

# World Objects

Everything visible is rendered from an Entity.

Examples

Tree

Flower

Rock

NPC

Pet

Train

Book

Vehicle

Building

Each entity determines its own appearance from its current state.

Example

Tree

Seedling

↓

🌱

Young Tree

↓

🌿

Mature Tree

↓

🌳

Fruit Tree

↓

🍎🌳

The renderer chooses the artwork.

The engine chooses the state.

---

# Interaction

Children interact with visible objects.

Examples

Click Garden Bed

↓

Plant Seed

Click Tree

↓

Water Tree

Click Book

↓

Read Book

Click NPC

↓

Talk

Interaction begins with curiosity.

Menus appear only when necessary.

---

# User Interface

The UI should gradually disappear.

Early versions may use buttons.

Future versions should replace buttons with natural interactions wherever practical.

Examples

Click Tree

instead of

Water Tree button

Click Train

instead of

Travel button

---

# Adaptive Rendering

The renderer should support different presentation styles without changing the engine.

Possible themes

Classic

Pixel Art

Hand Drawn

Fantasy

Space

Ocean

Seasonal

Christmas

Birthday

The world state remains identical.

Only presentation changes.

---

# Accessibility

Rendering should adapt to the player.

Possible adjustments include:

• Larger interaction zones

• Reduced animation

• Colour accessibility

• High contrast

• Audio prompts

• Simplified interface

These should be presentation choices rather than engine changes.

---

# Future Expansion

The renderer should eventually support:

Animated characters

Weather

Day and night

Lighting

Particles

Water

Wind

NPC movement

Pets

Vehicles

Seasonal events

without requiring architectural changes.

---

# Success Criteria

The child should feel they are exploring a real place.

The interface should become almost invisible.

The renderer should be replaceable without changing the engine.

The engine should remain independent of visual presentation.

---

Revision History

Version 1.0

Initial World Rendering Architecture created.