exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username").notNull().unique();
    tbl.string("password").notNull().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
