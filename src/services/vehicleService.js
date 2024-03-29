import AxiosInstance from './baseService';

export const addNewVehicle = (payload) => {
    return AxiosInstance.post('/vehicles/addNewVehicle', payload);
};
export const getVehicleDetails = (payload) => {
    return AxiosInstance.get('/vehicles/getVehicles');
};
export const getVehiclesWithExpenses = (payload) => {
    return AxiosInstance.post('/vehicles/getVehiclesWithExpenses',payload);
};
export const searchVehicleDetails = (payload) => {
    return AxiosInstance.post('/vehicles/searchVehicles', payload);
};
export const searchVehiclesAssignedDriver = (payload) => {
    return AxiosInstance.post('/vehicles/searchVehiclesAssignedDriver', payload);
};
export const updateODO = (payload) => {
    return AxiosInstance.post('/vehicles/updateOdo', payload);
};
export const updateVehicle = (payload) => {
    return AxiosInstance.post('/vehicles/updateVehicle', payload);
};
export const updateRevenueLicense = (payload) => {
    return AxiosInstance.post('/vehicles/updateRevenueLicense', payload);
};
export const updateInsuranceDetails = (payload) => {
    return AxiosInstance.post('/vehicles/updateInsuranceDetails', payload);
};