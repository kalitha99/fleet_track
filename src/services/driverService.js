import AxiosInstance from './baseService';

export const addNewDriver = (payload) => {
    return AxiosInstance.post('/Drivers/addNewDriver', payload);
};
export const getVehicleDetails = (payload) => {
    return AxiosInstance.get('/Drivers/getDrivers');
};
export const searchDrivers = (payload) => {
    return AxiosInstance.post('/Drivers/searchDrivers',payload);
};
export const assignVehicleToDriver = (payload) => {
    return AxiosInstance.post('/Drivers/assignVehicleToDriver',payload);
};