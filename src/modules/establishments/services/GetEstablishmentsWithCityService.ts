import AppError from '../../../errors/AppError';
import { findEstablishimentsWithCity } from '../infra/mysql';
import IEstablishments from '../dtos/IEstablishments';

interface Request {
    city: string;
    state: string;
}

interface DeletedItemOfEstablishmentsMap {
    id_usuario: string;
}

export const GetEstablishmentsWithCityService = async ({ city, state }: Request) => {

    const filteredEstablishiments = await findEstablishimentsWithCity(
        city,
        state
    );

    if(filteredEstablishiments[0] === undefined){
        return new AppError('Cidade ou estado não econtrados.');
    }

    // @ts-expect-error
    filteredEstablishiments.map((establishments: {id_usuario:string}) => delete establishments.id_usuario)

    return filteredEstablishiments;
}