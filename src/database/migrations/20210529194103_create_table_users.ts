import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('usuarios', function(table) {
        table.string('id').primary();
        table.string('nome',50).notNullable();
        table.date('data_nascimento');
        table.string('email',50).notNullable();
        table.string('senha').notNullable();
        table.integer('telefone',14).notNullable();
        table.integer('documento', 11).notNullable();
        table.integer('tipo_plano').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('usuarios');
}

