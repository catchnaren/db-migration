## Database Migration

A simple postgres db migration setup using node pg migrate library.

#### CMD to run the migration:

_(To apply migration)_
`DATABASE_URL=postgres://{username}@localhost:5432/{db_name} npm run migrate up`

_(To Revert last performed migration)_
`DATABASE_URL=postgres://{username}@localhost:5432/{db_name} npm run migrate down`
