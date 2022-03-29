## Database Migration

A simple postgres schema and data migration setup using node pg migrate library.

#### To start:

- Clone repo
- Run npm install

#### CMD to run the migration:

_(To apply migration)_
`DATABASE_URL=postgres://{username}@localhost:5432/{db_name} npm run migrate up`

_(To Revert last performed migration)_
`DATABASE_URL=postgres://{username}@localhost:5432/{db_name} npm run migrate down`

#### CMD to create new migration file:

`npm run migrate create add posts table`
