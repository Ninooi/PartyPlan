  
import crypto from 'crypto';
export const generateUniqueId = () => {
    return crypto.randomBytes(4).toString('hex');
}