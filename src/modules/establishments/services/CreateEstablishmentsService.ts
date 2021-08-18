import IEstablishments from '../dtos/IEstablishments';
import AppError from '../../../errors/AppError';
import { findEmail, findDocument, findCellphone, findUser, createEstablishments } from '../infra/mysql';

export const CreateEstablishmentsService = async ({ name, description, address, state, city, email, cellphone, document, user_id }: IEstablishments) => {

    const checkedEmail = await findEmail(email);

    if(checkedEmail){
        return new AppError('Email já cadastrado.');
    };

    const checkedDocument = await findDocument(document);

    if(checkedDocument){
        return new AppError('Documento já cadastrado.');
    };

    const checkedCellphone = await findCellphone(cellphone);

    if(checkedCellphone){
        return new AppError('Número de celular já cadastrado.');
    };

    const checkedUserExist = await findUser(user_id);

    if(!checkedUserExist){
        return new AppError('Usuário inexistente.');
    };

    const user = await createEstablishments({
        name, 
        description, 
        address, 
        state, 
        city, 
        email, 
        cellphone, 
        document, 
        user_id
    });

    return user;
}