import AxiosInstance from './baseService';

export const loginUser = (payload) => {
    return AxiosInstance.post('/login', payload);
};

