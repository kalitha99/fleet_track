import AxiosInstance from './baseService';

export const loginUser = (payload) => {
    return AxiosInstance.post('/login', payload);
};

export const handleSignup = (payload) => {
    return AxiosInstance.post('/handleSignup', payload);
};

