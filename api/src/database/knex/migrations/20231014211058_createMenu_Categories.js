exports.up = (knex) =>
  knex.schema.createTable("menu_categories", (table) => {
    table.increments("id");
    table
      .integer("plate_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("menu")
      .onDelete("CASCADE");
    table
      .integer("category_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE");

    table.primary(["plate_id", "category_id"]);

    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.schema.dropTable("menu_categories");
