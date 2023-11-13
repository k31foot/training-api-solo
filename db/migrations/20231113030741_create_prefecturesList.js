/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("prefecture", function (table) {
    table.increments("id").primary(); // Set this column as the primary key
    table.string("region", 32).notNullable();
    table.string("prefec", 32).notNullable();;
    table.string("city", 32).notNullable();
    table.integer("population").notNullable();;
    table.decimal("density", 32,1).notNullable();;
    table.decimal("area", 32,1).notNullable();
    table.string("homepage", 256).notNullable();;
});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("prefecture");
};
