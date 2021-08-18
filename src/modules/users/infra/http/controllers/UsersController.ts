import { Request, Response } from 'express';

import { CreateUserService } from '../../../services/CreateUserService';

export const Create = async (request:Request , response: Response): Promise<Response> => {
  
        const { name, birth_date, email, password, cellphone, document, type_plan } = request.body;

        const user = await CreateUserService({
                name, 
                birth_date, 
                email, 
                password, 
                cellphone, 
                document,
                type_plan
        });

    return response.json(user);   
}