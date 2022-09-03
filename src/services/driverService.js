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
export const getDriverById = (payload) => {
    return AxiosInstance.post('/Drivers/getDriverById',payload);
};
export const searchAssignedDrivers = (payload) => {
    return AxiosInstance.post('/Drivers/searchAssignedDrivers',payload);
};
export const assignVehicleToDriver = (payload) => {
    return AxiosInstance.post('/Drivers/assignVehicleToDriver',payload);
};
