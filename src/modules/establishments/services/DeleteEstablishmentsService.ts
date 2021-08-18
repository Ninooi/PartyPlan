import AppError from '../../../errors/AppError';
import { findEstablishiment, deleteEstablishiment } from '../infra/mysql';

interface Request {
    establishment_id: string;
    user_id: string;
}

export const DeleteEstablishmentsService = async ({ establishment_id, user_id }: Request) => {

    const filteredEstablishiments = await findEstablishiment(
        establishment_id
    );

    if(!filteredEstablishiments){
        return new AppError('Estabelecimento não encontrado.');
    }

    if(filteredEstablishiments.id_usuario !== user_id){
        return new AppError('Este usuário não pode remover este estabelecimento.');
    }

    const deletedEstablishiments = await deleteEstablishiment(establishment_id);

    return deletedEstablishiments;
}