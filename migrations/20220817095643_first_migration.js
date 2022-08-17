/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// add
exports.up = function(knex) {
  return knex.schema.createTable('people', (table) => {
    table.increments('id');
    table.string('name');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
// undo
exports.down = function(knex) {
    knex.schema.dropTable('people');
};
