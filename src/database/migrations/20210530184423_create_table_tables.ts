import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('mesas', function(table) {
        table.string('id').primary();
        table.integer('numero').notNullable();
        table.string('localidade', 50).notNullable();
        table.integer('espaco').notNullable();
        table.decimal('preco').notNullable();
        table.string('id_estabelecimento').notNullable();
        table.foreign('id_estabelecimento').references('id').inTable('estabelecimentos');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('mesas');
}

