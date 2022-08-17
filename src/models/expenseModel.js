import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {enterExpenses} from "../services/expenseService";


export const enterExpensesAction = createAction('ENTER_EXPENSES');

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

            msg = response.data?.msg +
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
            message.error(
                {
                    content: "Something went wrong",
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
}

const initialState = {
    vehicleExpenseDetails: null,
};

export const expenseReducer = createReducer({},
    initialState);