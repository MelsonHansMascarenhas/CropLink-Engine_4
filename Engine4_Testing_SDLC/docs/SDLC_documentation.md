# Engine 4 — Testing & Validation / SDLC

## SDLC phases for CropLink
1. **Planning:** identify farmer pain points, goals, scope, team roles, constraints.
2. **Requirements:** scheme discovery, service information, eligibility quiz, registration/login UI, contact/help form.
3. **Design:** component architecture, responsive layout, database schemas, API plan, data flow and UI wireframes.
4. **Implementation:** React/Vite frontend; Express backend skeleton; reusable scheme engine; MongoDB models and seed.
5. **Testing:** unit tests for search/filter/matching and inquiry validation; integration tests planned for MongoDB/API; UI smoke tests.
6. **Deployment/Maintenance:** build verification, environment configuration, bug tracking, version control and updates.

## Testing scope and current state
The uploaded frontend is primarily a prototype with local data and simulated form submissions. Backend currently exposes `/` and `/api/health`; MongoDB persistence and business endpoints are not wired in. The new engine tests exercise pure functions independently.

## Defect/known issue log
- **BUG-001:** eligibility quiz collects landholding and irrigation answers but current matching logic does not use those answers.
- **BUG-002:** backend seed script in original project was only a placeholder; Engine 1 adds a working seed module.
- **BUG-003:** contact form uses a simulated timeout and does not persist/send the inquiry.
- **BUG-004:** login/register/apply modals are UI prototypes; backend authentication/application routes are not implemented.
- **BUG-005:** scheme/service content is demo data and must be verified against official sources before real use.
