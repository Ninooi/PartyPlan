import AppError from '../../../errors/AppError';
import { findEmail } from '../infra/mysql';
import { compareHash } from '../providers/hashProvider';
import { sign } from 'jsonwebtoken';

interface Request {
    email: string;
    password: string;
}

export const AuthenticateUserService = async ({ email, password }: Request) => {

    const user = await findEmail(email);

    if(!user){
        return new AppError('Email ou senha incorretos.');
    };

    const passwordMatched = await compareHash(password, user.senha)

    if(!passwordMatched){
        return new AppError('Email ou senha incorretos.');
    };

    const token = sign({}, '18c24328fcf8e92d333f6bb50f144efe',{
        subject: String(user.id),
        expiresIn: '15d'
    });

    delete user.senha

    return {user, token};
}