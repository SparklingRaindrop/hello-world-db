/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    knex.schema.hasTable('people').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("people", (table) => {
            table.increments("id");
            table.string("name");
            });
        }
    });
};
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.down = function(knex) {
    return knex.schema.dropTable("people");
};