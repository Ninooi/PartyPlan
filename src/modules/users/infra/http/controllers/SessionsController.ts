import { Request, Response } from 'express';

import { AuthenticateUserService } from '../../../services/AuthenticateUserService';

export const Create = async (request:Request , response: Response): Promise<Response> => {
  
        const { email, password } = request.body;

        const token = await AuthenticateUserService({
                email, 
                password
        });

    return response.json(token);   
}