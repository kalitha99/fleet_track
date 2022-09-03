import AxiosInstance from './baseService';

export const addNewTrip = (payload) => {
    return AxiosInstance.post('/Trip/addNewTrip', payload);
};

export const cancelTrip = (payload) => {
    return AxiosInstance.post('/Trip/cancelTrip',payload);
};

export const getTrips = (payload) => {
    return AxiosInstance.post('/Trip/getTrips',payload);
};

export const startTrip = (payload) => {
    return AxiosInstance.post('/Trip/startTrip',payload);
};
export const endTrip = (payload) => {
    return AxiosInstance.post('/Trip/endTrip',payload);
};
