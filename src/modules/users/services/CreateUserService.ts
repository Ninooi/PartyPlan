import IUser from '../dtos/IUser';
import AppError from '../../../errors/AppError';
import { findEmail, findDocument, findCellphone, createUser } from '../infra/mysql';
import { generateHash } from '../providers/hashProvider';

export const CreateUserService = async ({name, birth_date, email, password, cellphone, document, type_plan}: IUser) => {

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

    const hashPassword = await generateHash(password);

    const user = await createUser({
        name, 
        birth_date, 
        email, 
        password: hashPassword, 
        cellphone, 
        document,
        type_plan
    });

    return user;
}