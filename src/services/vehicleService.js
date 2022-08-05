import AxiosInstance from './baseService';

export const addNewVehicle = (payload) => {
    return AxiosInstance.post('/vehicles/addNewVehicle', payload);
};
export const getVehicleDetails = (payload) => {
    return AxiosInstance.get('/vehicles/getVehicles');
};