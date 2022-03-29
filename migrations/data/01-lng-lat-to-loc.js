require('dotenv').config({ path: '../../.env' });
const pg = require('pg');

const pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.DATABASE_NAME,
  user: process.env.USER_NAME,
  password: '',
});

pool
  .query(
    `
  UPDATE posts
  SET loc = POINT(lng, lat)
  WHERE loc IS NULL;
`
  )
  .then(() => {
    console.log('Update complete');
    pool.end();
  })
  .catch((err) => console.error(err.message));
