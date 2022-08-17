/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// add
exports.up = function(knex) {
  knex.schema.createTable('people', (table) => {
    table.increments('id');
    table.string('name');
  });
  return;
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// undo
exports.down = function(knex) {
    knex.schema.dropTable('people');
};
