# Project Structure

This document describes the directory structure of Noah's Seed.

The project is organised to separate the engine, content, documentation and development tools.

```
NoahsSeed/
│
├── app/            # Application source code and assets
├── archive/        # Retired experiments and old prototypes
├── content/        # Game content stored as data
├── docs/           # Project documentation
├── releases/       # Release snapshots
├── tools/          # Development utilities and helper scripts
│
├── CHANGELOG.md    # Project release history
├── README.md       # Project overview
└── .gitignore      # Git ignore rules
```

---

## Folder Responsibilities

### app/

Contains the application itself, including source code, assets and project files.

### archive/

Contains retired experiments, prototypes and historical work that is no longer part of the active project.

### content/

Contains configurable game content such as:

- Plants
- Mentors
- Activities
- Books
- Animals
- Items

The engine should load this content rather than hard-code it.

### docs/

Contains documentation describing the project architecture, vision and development process.

### releases/

Contains milestone snapshots created at significant stages of development.

### tools/

Contains scripts and utilities used during development but not required by the application itself.

---

## Design Principle

Code belongs in the engine.

Content belongs in data.

Documentation belongs in `docs`.

Development utilities belong in `tools`.