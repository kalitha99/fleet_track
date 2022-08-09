import AxiosInstance from './baseService';

export const addNewDriver = (payload) => {
    return AxiosInstance.post('/Drivers/addNewDriver', payload);
};
export const getVehicleDetails = (payload) => {
    return AxiosInstance.get('/Drivers/getDrivers');
};