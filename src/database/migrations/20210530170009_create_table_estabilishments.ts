import { Knex } from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('estabelecimentos', function(table) {
        table.string('id').primary();
        table.string('nome', 50).notNullable();
        table.string('descricao', 150).notNullable();
        table.string('endereco', 80).notNullable();
        table.string('cidade', 80).notNullable();
        table.string('estado', 2).notNullable();
        table.integer('telefone', 14).notNullable();
        table.string('email', 50).notNullable();
        table.integer('documento', 14).notNullable();
        table.string('id_usuario').notNullable();
        table.foreign('id_usuario').references('id').inTable('usuarios');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('estabelecimentos');
}

