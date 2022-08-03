# Neighbour App API
---
Search your neighbours and find info about their homes.

---
### Usage: 
| Request | Route | Description | body/query |
|---------|-------|-------------|------------|
| `GET`   | `/owner/`| returns all owners - all users of the app| N/A |
| `GET`   | `/owner/[owner's id]`| returns a specific owner| N/A |
| `POST`   | `/owner/`| inserts a new entity into the DB| houseId, nOfOccupants, age, houseNumber, streetName, postcode, city  |
| `PUT`   | `/owner/[owner's id]`| updates the specific owner's entry| update any of the fields above |
| `GET`   | `/house/[house id]`| returns the info about a specific house| N/A |
| `GET`   | `/postcode/[postcode]`| returns a specific neigbourhood data| query: `minAge`, `maxAge`, `size`|

---
### MORE INFO TO FOLLOW