# Engine 1: Data Integrity (DBMS)

**Owner:** Team member responsible for database design, MongoDB/Mongoose, data quality and CRUD.

## Contents
- `database/config/connection.js`: connection helper
- `database/models/`: Scheme and Service schemas
- `database/seed/seedData.js`: sample records
- `database/scripts/seed.js`: database seeding
- `database/scripts/crudExamples.js`: CRUD examples
- `docs/database_design.md`: collection design and schema explanation

## Setup
1. Install dependencies: `npm install` from this folder.
2. Set `MONGODB_URI` in your shell or `.env` (do not commit `.env`).
3. Seed: `node database/scripts/seed.js`.

## Evidence for faculty
Show schema definitions, unique indexes, seed records, and CRUD operations. The current uploaded backend did not yet contain connected models or persisted farmer/application records; this folder adds a starter DB layer.
