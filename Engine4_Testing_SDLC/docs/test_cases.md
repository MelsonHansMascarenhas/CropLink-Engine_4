# Test Cases

| Test ID | Input | Expected Output | Actual Output | Status |
|---|---|---|---|---|
| TC-001 | Search `solar` in scheme list | Solar scheme is returned | Automated unit test confirms match | PASS |
| TC-002 | Search empty string | All schemes returned | Automated unit test confirms all records | PASS |
| TC-003 | Category `Energy` | Only Energy category records | Automated unit test confirms one record | PASS |
| TC-004 | Valid inquiry name/email/10-digit phone/topic/message | Validation passes | Automated unit test confirms valid | PASS |
| TC-005 | Empty inquiry payload | Validation fails with required-field errors | Automated unit test confirms invalid | PASS |
| TC-006 | Invalid email | Validation fails | Covered by validator; add dedicated assertion | NOT RUN |
| TC-007 | Phone with letters or fewer than 10 digits | Validation fails | Covered by validator; add dedicated assertion | NOT RUN |
| TC-008 | MongoDB unavailable | Seed operation reports connection failure | Requires configured MongoDB | NOT RUN |
| TC-009 | `/api/health` request | JSON status `ok` | Manual verification required | NOT RUN |
| TC-010 | Contact form submit | Success message appears | Prototype simulates success; no backend save | PASS (UI only) |
| TC-011 | Login with credentials | Authenticated session | Authentication backend absent | NOT IMPLEMENTED |
| TC-012 | Scheme application submit | Application saved/tracked | Application backend absent | NOT IMPLEMENTED |
