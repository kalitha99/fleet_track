import AxiosInstance from './baseService';

export const addNewVehicle = (payload) => {
    return AxiosInstance.post('/vehicles/addNewVehicle', payload);
};
export const getVehicleDetails = (payload) => {
    return AxiosInstance.get('/vehicles/getVehicles');
};
export const searchVehicleDetails = (payload) => {
    return AxiosInstance.post('/vehicles/searchVehicles', payload);
};
export const updateODO = (payload) => {
    return AxiosInstance.post('/vehicles/updateOdo', payload);
};