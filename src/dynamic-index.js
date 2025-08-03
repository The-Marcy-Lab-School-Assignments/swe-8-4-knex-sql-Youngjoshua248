const {
  createTable,
  truncate,
  closeConnection,
  insertMultipleBooks,
  selectBooksByGenre,
} = require("./starter-queries");

const main = async () => {
  await createTable().catch(() => "Table created");
  await insertMultipleBooks();

  // 🔓 Dangerous — watch the hack in action
  await dangerousDynamicQuery();

  // 🔐 Safe queries using parameterized input
  const safeResult = await safeDynamicQuery(2);
  console.log("Safe Result (id = 2):", safeResult);

  const filtered = await multipleDynamicParamsQuery(100, true);
  console.log("Filtered Books (pages > 100 & is_movie = true):", filtered);

  const classics = await selectBooksByGenre("Classic");
  console.log("Books in genre 'Classic':", classics);

  await truncate();
  closeConnection();
};
