import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {
    addNewVehicle,
    getVehicleDetails, getVehiclesWithExpenses,
    searchVehicleDetails, searchVehiclesAssignedDriver, updateInsuranceDetails,
    updateODO,
    updateRevenueLicense, updateVehicle
} from "../services/vehicleService";


export const addNewVehicleAction = createAction('ADD_NEW_VEHICLE');
export const getVehicleAction = createAction('GET_VEHICLE');
export const setVehicleDataAction = createAction('SET_VEHICLE_DATA');
export const searchVehicleDataAction = createAction('SEARCH_VEHICLE_DATA');
export const searchVehiclesAssignedDriverAction = createAction('SEARCH_VEHICLES_ASSIGNED_DRIVER');
export const setEditModalContentAction = createAction('SET_EDIT_MODAL_CONTENT');
export const setDriverAssignModalContentAction = createAction('SET_DRIVER_ASSIGN_MODAL_CONTENT');
export const updateODOAction = createAction('UPDATE_ODO_VEHICLE');
export const updateVehicleAction = createAction('UPDATE_VEHICLE');
export const updateRevenueLicenseAction = createAction('UPDATE_REVENUE_LICENSE_DETAILS');
export const updateInsuranceDetailsAction = createAction('UPDATE_INSURANCE_DETAILS');
export const getVehiclesWithExpensesAction = createAction('GET_VEHICLES_WITH_EXPENSES');


const addNewVehicleSaga = function* (action) {
    try {
        console.log("saga")
        const response = yield call(addNewVehicle, action.payload);
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


    } catch (response) {
        let msg = ''
        if (response.response.data?.msg !== "") {

            msg = response.response.data?.msg

            console.log("fds", response.response.data?.msg)
            message.error(
                {
                    content: msg,
                    style: {
                        marginTop: '50vh',
                        color: 'red'
                    },
                });
        }

    }
}

const getVehicleSaga = function* (action) {
    try {
        const response = yield call(getVehicleDetails, action.payload);
        yield put(setVehicleDataAction(response.data.vehicles))
        console.log(response)
    } catch (e) {
        message.error(e.message);
    }
}

const getVehiclesWithExpensesSaga = function* (action) {
    try {
        const response = yield call(getVehiclesWithExpenses, action.payload);
        yield put(setVehicleDataAction(response.data.vehicles))
        console.log(response)
    } catch (e) {
        message.error(e.message);
    }
}

const searchVehicleSaga = function* (action) {
    try {
        //console.log(action.payload)
        const response = yield call(searchVehicleDetails, action.payload);
        yield put(setVehicleDataAction(response.data.vehicles))
        console.log(action.payload)

        // if (action.payload.make == ""){
        //     console.log("empty")
        // }else {
        //     console.log("not empty")
        // }

    } catch (e) {
        message.error(e.message);
    }
}

const searchVehiclesAssignedDriverSaga = function* (action) {
    try {
        //console.log(action.payload)
        const response = yield call(searchVehiclesAssignedDriver , action.payload);
        yield put(setVehicleDataAction(response.data.vehicles))
        console.log(action.payload)

        // if (action.payload.make == ""){
        //     console.log("empty")
        // }else {
        //     console.log("not empty")
        // }

    } catch (e) {
        message.error(e.message);
    }
}

const updateODOSaga = function* (action) {
    try {
        const response = yield call(updateODO, action.payload);
        let msg = ''
        if (response.data?.msg !== "" && response.data?.status === "ok") {

            msg = response.data?.msg
                console.log("fds", response.data?.msg)
            message.success(
                {
                    content: msg,
                    style: {
                        marginTop: '5vh',
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
    } catch (e) {
        message.error(
            {
                content: e,
                style: {
                    marginTop: '50vh',
                    color: 'green'
                },
            });
    }
}

const updateVehicleSaga = function* (action) {
    try {
        const response = yield call(updateVehicle, action.payload);
        let msg = ''
        if (response.data?.msg !== "" && response.data?.status === "ok") {

            msg = response.data?.msg
                console.log("fds", response.data?.msg)
            message.success(
                {
                    content: msg,
                    style: {
                        marginTop: '5vh',
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
    } catch (e) {
        message.error(
            {
                content: e.msg,
                style: {
                    marginTop: '50vh',
                    color: 'green'
                },
            });
    }
}

const updateRevenueLicenseSaga = function* (action) {
    try {

        const formData = new FormData()
        formData.append('image', action.payload.img.originFileObj)
        formData.append('registration_number', action.payload.registration_number)
        formData.append('expense_type', "revenue")
        formData.append('expense_name', "revenue license")
        formData.append('expense_cost', action.payload.expense_cost)
        formData.append('revenue_license_num', action.payload.revenue_license_num)
        formData.append('revenue_license_issue_date', action.payload.revenue_license_issue_date)
        formData.append('revenue_license_expire_date', action.payload.revenue_license_expire_date)
        formData.append('entered_by', sessionStorage.USERNAME)
        console.log("formdata",formData)
        const response = yield call(updateRevenueLicense, formData);
        let msg = ''
        if (response.data?.msg !== "" && response.data?.status === "ok") {
            console.log(response)
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
            message.error(
                {
                    content: "Something went wrong",
                    style: {
                        marginTop: '50vh',
                        color: 'red'
                    },
                });
        }
    } catch (e) {
        console.log(e)
        message.error(
            {
                content: e.msg,
                style: {
                    marginTop: '50vh',
                    color: 'red'
                },
            });
        // let msg = ''
        // if (response.data?.msg !== "") {
        //
        //     msg = response.data?.msg +
        //         console.log("fds", response.data?.msg)
        //     message.error(
        //         {
        //             content: msg,
        //             style: {
        //                 marginTop: '50vh',
        //                 color: 'red'
        //             },
        //         });
        // }
    }
}

const updateInsuranceDetailsSaga = function* (action) {
    try {
        const formData = new FormData()
        formData.append('image', action.payload.img.originFileObj)
        formData.append('registration_number', action.payload.registration_number)
        formData.append('expense_type', "insurance")
        formData.append('expense_name', "insurance cost")
        formData.append('expense_cost', action.payload.expense_cost)
        formData.append('insurance_num', action.payload.insurance_num)
        formData.append('insurance_issue_date', action.payload.insurance_issue_date)
        formData.append('insurance_expire_date', action.payload.insurance_expire_date)
        formData.append('entered_by', sessionStorage.USERNAME)
        const response = yield call(updateInsuranceDetails, formData);
        let msg = ''
        if (response.data?.msg !== "" && response.data?.status === "ok") {
            console.log(response)
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
            message.error(
                {
                    content: "Something went wrong",
                    style: {
                        marginTop: '50vh',
                        color: 'red'
                    },
                });
        }
    } catch (response) {
        let msg = ''
        if (response.data?.msg !== "") {

            msg = response.data?.msg +
                console.log("fds", response.data?.msg)
            message.error(
                {
                    content: msg,
                    style: {
                        marginTop: '50vh',
                        color: 'red'
                    },
                });
        }
    }
}


export const vehicleRootSaga = function* () {
    yield takeLatest(addNewVehicleAction, addNewVehicleSaga);
    yield takeLatest(getVehicleAction, getVehicleSaga)
    yield takeLatest(searchVehicleDataAction, searchVehicleSaga)
    yield takeLatest(searchVehiclesAssignedDriverAction, searchVehiclesAssignedDriverSaga)
    yield takeLatest(updateODOAction, updateODOSaga)
    yield takeLatest(updateVehicleAction, updateVehicleSaga)
    yield takeLatest(updateRevenueLicenseAction, updateRevenueLicenseSaga)
    yield takeLatest(updateInsuranceDetailsAction, updateInsuranceDetailsSaga)
    yield takeLatest(getVehiclesWithExpensesAction, getVehiclesWithExpensesSaga)

};


const initialState = {
    vehicleDetails: null,
    editModalContent: null,
};

export const vehicleReducer = createReducer(
    {
        [setVehicleDataAction]: (state, payload) => {
            return {
                ...state,
                vehicleDetails: payload
            };
        },
        [setEditModalContentAction]: (state, payload) => {
            return {...state, editModalContent: payload};
        },
        [setDriverAssignModalContentAction]: (state, payload) => {
            return {...state, driverAssignModalContent: payload};
        },
    },
    initialState
);