import { Request, Response } from 'express';
import { CreateEstablishmentsService, GetEstablishmentsWithCityService, DeleteEstablishmentsService } from '../../../services';

export const Create = async (request:Request , response: Response): Promise<Response> => {
  
        const { name, description, address, state, city, email, cellphone, document, user_id } = request.body;

        const establishments = await CreateEstablishmentsService({
                name, 
                description, 
                address,
                city,
                state,
                cellphone, 
                email,  
                document,
                user_id
        });

    return response.json(establishments);   
}

export const GetWithCity = async (request:Request , response: Response): Promise<Response> => {
  
        const city = String(request.query.city);
        const state = String(request.query.state);

        const establishments = await GetEstablishmentsWithCityService({
                city,
                state
        });

    return response.json(establishments);   
}

export const Delete = async (request:Request , response: Response): Promise<Response> => {
  
        const { establishment_id, user_id } = request.body;

        const establishments = await DeleteEstablishmentsService({
                establishment_id,
                user_id
        });

    return response.json(establishments);   
}