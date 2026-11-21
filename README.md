# CropLink Ultra Pro — 4 Engine Team Structure

This repository split organizes the current prototype into the four faculty-assigned engines while retaining the existing frontend.

## Engines
1. `Engine1_Data_Integrity` — MongoDB/Mongoose schema, seed dataset, CRUD examples and DB documentation.
2. `Engine2_Logic_DSA` — reusable scheme search/filter/matching/validation functions and unit tests.
3. `Engine3_Interface_Access` — existing React/Vite frontend and Express API skeleton.
4. `Engine4_Testing_SDLC` — test cases, validation test scripts, SDLC and bug tracking documentation.

## Run frontend
```bash
cd Engine3_Interface_Access/frontend
npm install
npm run dev
```

## Run backend skeleton
```bash
cd Engine3_Interface_Access/backend
npm install
npm run dev
```

## Run Engine 2 tests
```bash
cd Engine2_Logic_DSA
npm test
```

## Important prototype limitations
The frontend is mostly static/demo data. Login, registration, scheme applications and contact submission are not connected to persistent backend endpoints. The backend only has root and health routes. The DB seed/models and reusable logic are added as starter work; integration remains a next step.

## Team ownership
Each team member should work primarily inside their assigned engine folder. Shared changes should be coordinated through pull requests.
