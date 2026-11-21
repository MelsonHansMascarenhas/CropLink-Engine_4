# Engine 1 — Data Integrity / DBMS

## Database choice
MongoDB with Mongoose is used in this module. `Scheme` and `Service` are separate collections.

## Collections
### schemes
- `schemeId`: unique business identifier (string)
- `title`, `shortName`, `department`, `benefit`, `category`: required descriptive fields
- `eligibility`, `documents`: arrays of strings
- `status`: Active / Inactive / Draft
- timestamps: `createdAt`, `updatedAt`

### services
- `serviceId`: unique business identifier
- `title`: required
- `tagline`, `description`, `features`, `icon`, `stats`, `color`
- timestamps

## Relationships
Current data is independent: one scheme may have multiple eligibility criteria and documents, and one service may have multiple features. These are embedded arrays. No farmer/application collection exists in the uploaded backend yet.

## CRUD
See `database/scripts/crudExamples.js`: create, read, update, delete operations for schemes.

## Seed data
`database/seed/seedData.js` contains sample scheme and service records adapted from the current frontend cards. Use the seed script only with a development database.

## Environment
Set `MONGODB_URI` before running the seed script. Never commit real credentials.
