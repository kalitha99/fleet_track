import AxiosInstance from './baseService';

export const enterExpenses = (payload) => {
    return AxiosInstance.post('/Expenses/addVehicleExpense', payload);
};