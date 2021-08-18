import { generateUniqueId } from '../../../../utils';
import knex from '../../../../database';
import IEstablishments from '../../dtos/IEstablishments';

export const findEstablishiment = async (establishment_id: string) => {
    const checkedEstablishment = await knex('estabelecimentos').where('id', establishment_id);

    return checkedEstablishment[0];
};

export const findEmail = async (email: string) => {
    const checkedEmail = await knex('estabelecimentos').where('email', email);

    return checkedEmail[0];
};

export const findDocument = async (document: number) => {
    const checkedDocument = await knex('estabelecimentos').where('documento', document);

    return checkedDocument[0];
};

export const findCellphone = async (cellphone: number) => {
    const checkedCellphone = await knex('estabelecimentos').where('telefone', cellphone);

    return checkedCellphone[0];
};

export const findUser = async (user_id: number) => {
    const checkedUserId = await knex('usuarios').where('id', user_id);

    return checkedUserId[0];
};

export const findEstablishimentsWithCity = async (city: string, state: string) => {
    const filteredEstablishiments = await knex('estabelecimentos').where('cidade', city).andWhere('estado', state);

    return filteredEstablishiments;
};

export const deleteEstablishiment = async (establishment_id: string) => {
    await knex('estabelecimentos').where('id', establishment_id).del();

    return {
        "message": "Estabelecimento removido com sucesso.",
        "statusCode": 200
    };
};

export const createEstablishments =  async ({ name, description, address, state, city, email, cellphone, document, user_id }: IEstablishments) => {
    await knex('estabelecimentos')
    .insert({
        id: generateUniqueId(),
        nome: name, 
        descricao: description, 
        endereco: address,
        estado: state,
        cidade: city,
        email, 
        telefone: cellphone, 
        documento: document,
        id_usuario: user_id
    });
    
    return {
        "message": "Estabelecimento cadastrado com sucesso.",
        "statusCode": 200
    }
};