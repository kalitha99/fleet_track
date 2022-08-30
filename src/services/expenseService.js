import AxiosInstance from './baseService';

export const enterExpenses = (payload) => {
    return AxiosInstance.post('/Expenses/addVehicleExpense', payload);
};
export const enterServiceExpenses = (payload) => {
    return AxiosInstance.post('/Expenses/addVehicleServiceExpense', payload);
};
export const enterFuelExpenses = (payload) => {
    return AxiosInstance.post('/Expenses/addFuelExpense', payload);
};