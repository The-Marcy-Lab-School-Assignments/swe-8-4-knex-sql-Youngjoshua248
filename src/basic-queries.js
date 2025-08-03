const knex = require("./knex");

/* The knex object above has a knex.raw method that
can be used to execute SQL queries. It will return an
object with a .rows property which will ALWAYS be an
Array containing the requested data (even if only 1 row
was returned).
*/

const selectAllBooks = async () => {
  const query = `
    SELECT * FROM books;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const selectAllTitlesAndGenres = async () => {
  const query = `
    SELECT title, genre
    FROM books;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const selectAllBooksOver250Pages = async () => {
  const query = `
    SELECT *
    FROM books
    WHERE pages > 250;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const insertDuneBook = async () => {
  const query = `
    INSERT INTO books (title, genre, pages, is_movie)
    VALUES ('Dune', 'Sci Fi', 500, false)
    RETURNING *;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const updateShortBooksToMovies = async () => {
  const query = `
    UPDATE books
    SET is_movie = true
    WHERE pages < 150
    RETURNING *;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const deleteDuneBook = async () => {
  const query = `
    DELETE FROM books
    WHERE title = 'Dune';
  `;

  const result = await knex.raw(query);
  return result.rowCount;
};

module.exports = {
  selectAllBooks,
  selectAllTitlesAndGenres,
  selectAllBooksOver250Pages,
  insertDuneBook,
  updateShortBooksToMovies,
  deleteDuneBook,
};
