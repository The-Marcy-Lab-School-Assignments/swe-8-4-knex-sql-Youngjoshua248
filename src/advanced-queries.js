const knex = require("./knex");

const countNumberOfBooks = async () => {
  const query = `
    SELECT COUNT(*) AS count
    FROM books;
  `;

  const { rows } = await knex.raw(query);
  return rows[0];
};

const selectAllLongOrMovieBooks = async () => {
  const query = `
    SELECT *
    FROM books
    WHERE pages >= 250 OR is_movie = true;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const selectBooksBetween150And300Pages = async () => {
  const query = `
    SELECT *
    FROM books
    WHERE pages > 150 AND pages < 300;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const orderBooksByPages = async () => {
  const query = `
    SELECT *
    FROM books
    ORDER BY pages ASC;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const selectLongestBook = async () => {
  const query = `
    SELECT *
    FROM books
    ORDER BY pages DESC
    LIMIT 1;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const aliasIsMovie = async () => {
  const query = `
    SELECT title, is_movie AS "Already Filmed"
    FROM books;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

const countBooksInGenres = async () => {
  const query = `
    SELECT genre, COUNT(*) AS count
    FROM books
    GROUP BY genre;
  `;

  const { rows } = await knex.raw(query);
  return rows;
};

module.exports = {
  countNumberOfBooks,
  selectAllLongOrMovieBooks,
  selectBooksBetween150And300Pages,
  orderBooksByPages,
  selectLongestBook,
  aliasIsMovie,
  countBooksInGenres,
};
