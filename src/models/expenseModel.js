import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {enterExpenses, enterFuelExpenses, enterServiceExpenses} from "../services/expenseService";


export const enterExpensesAction = createAction('ENTER_EXPENSES');
export const enterServiceExpensesAction = createAction('ENTER_SERVICE_EXPENSES');
export const enterFuelExpensesAction = createAction('ENTER_FUEL_EXPENSES');

const enterExpensesSaga = function* (action) {
    try {
        console.log(action.payload)
        const formData = new FormData()
        formData.append('image', action.payload.img.originFileObj)
        formData.append('registration_number', action.payload.registration_number)
        formData.append('expense_type', action.payload.expense_type)
        formData.append('expense_date', action.payload.expense_date)
        formData.append('expense_name', action.payload.expense_name)
        formData.append('expense_cost', action.payload.expense_cost)
        formData.append('entered_by', sessionStorage.USERNAME)
        const response = yield call(enterExpenses, formData);
        let msg = ''
        if (response.data?.msg !== "" && response.data?.status === "ok") {

            msg = response.data?.msg
                console.log("fds", response.data?.msg)
            message.success(
                {
                    content: msg,
                    style: {
                        marginTop: '50vh',
                        color: 'green'
                    },
                });
        } else {
            msg = response.data?.msg
            message.error(
                {
                    content: msg,
                    style: {
                        marginTop: '50vh',
                        color: 'red'
                    },
                });
        }
    } catch (err) {


    }
}

const enterFuelExpensesSaga = function* (action) {
    try {
        console.log("fuel")
        const formData = new FormData()
        formData.append('image', action.payload.img.originFileObj)
        formData.append('registration_number', action.payload.registration_number)
        formData.append('expense_type', action.payload.expense_type)
        formData.append('expense_date', action.payload.expense_date)
        formData.append('number_of_liters', action.payload.number_of_liters)
        formData.append('expense_cost', action.payload.expense_cost)
        formData.append('entered_by', sessionStorage.USERNAME)
        const response = yield call( enterFuelExpenses, formData);
        let msg = ''
        if (response.data?.msg !== "" && response.data?.status === "ok") {

            msg = response.data?.msg
            console.log("fds", response.data?.msg)
            message.success(
                {
                    content: msg,
                    style: {
                        marginTop: '50vh',
                        color: 'green'
                    },
                });
        } else {
            msg = response.data?.msg
            message.error(
                {
                    content: msg,
                    style: {
                        marginTop: '50vh',
                        color: 'red'
                    },
                });
        }
    } catch (err) {


    }
}

const enterServiceExpensesSaga = function* (action) {
    try {
        console.log(action.payload)
        const formData = new FormData()
        formData.append('image', action.payload.img.originFileObj)
        formData.append('registration_number', action.payload.registration_number)
        formData.append('expense_type', action.payload.expense_type)
        formData.append('expense_date', action.payload.expense_date)
        formData.append('due_on', action.payload.due_on)
        formData.append('done_on', action.payload.done_on)
        formData.append('expense_cost', action.payload.expense_cost)
        formData.append('entered_by', sessionStorage.USERNAME)
        const response = yield call(enterServiceExpenses, formData);
        let msg = ''
        if (response.data?.msg !== "" && response.data?.status === "ok") {

            msg = response.data?.msg
            console.log("fds", response.data?.msg)
            message.success(
                {
                    content: msg,
                    style: {
                        marginTop: '50vh',
                        color: 'green'
                    },
                });
        } else {
            msg = response.data?.msg
            message.error(
                {
                    content: msg,
                    style: {
                        marginTop: '50vh',
                        color: 'red'
                    },
                });
        }
    } catch (err) {


    }
}


export const expensesRootSaga = function* () {
    yield takeLatest(enterExpensesAction, enterExpensesSaga);
    yield takeLatest(enterFuelExpensesAction, enterFuelExpensesSaga);
    yield takeLatest(enterServiceExpensesAction, enterServiceExpensesSaga);
}

const initialState = {
    vehicleExpenseDetails: null,
};

export const expenseReducer = createReducer({},
    initialState);