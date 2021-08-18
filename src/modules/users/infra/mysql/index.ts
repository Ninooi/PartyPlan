import { generateUniqueId } from '../../../../utils';
import knex from '../../../../database';
import IUser from '../../dtos/IUser';

export const findEmail = async (email: string) => {
    const checkedEmail = await knex('usuarios').where('email', email);

    return checkedEmail[0];
};

export const findDocument = async (document: number) => {
    const checkedDocument = await knex('usuarios').where('documento', document);

    return checkedDocument[0];
};

export const findCellphone = async (cellphone: number) => {
    const checkedCellphone = await knex('usuarios').where('telefone', cellphone);

    return checkedCellphone[0];
};

export const createUser =  async ({name, birth_date, email, password, cellphone, document, type_plan}: IUser) => {
    await knex('usuarios')
    .insert({
        id: generateUniqueId(),
        nome: name, 
        data_nascimento: birth_date, 
        email, 
        senha: password, 
        telefone: cellphone, 
        documento: document,
        tipo_plano: type_plan
    });
    return {
        "message": "Usuário cadastrado com sucesso.",
        "statusCode": 200
    }
};