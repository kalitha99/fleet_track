import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {
    addNewVehicle,
    getVehicleDetails,
    searchVehicleDetails, updateInsuranceDetails,
    updateODO,
    updateRevenueLicense
} from "../services/vehicleService";


export const addNewVehicleAction = createAction('ADD_NEW_VEHICLE');
export const getVehicleAction = createAction('GET_VEHICLE');
export const setVehicleDataAction = createAction('SET_VEHICLE_DATA');
export const searchVehicleDataAction = createAction('SEARCH_VEHICLE_DATA');
export const setEditModalContentAction = createAction('SET_EDIT_MODAL_CONTENT');
export const updateODOAction = createAction('UPDATE_ODO_VEHICLE');
export const updateRevenueLicenseAction = createAction('UPDATE_REVENUE_LICENSE_DETAILS');
export const updateInsuranceDetailsAction = createAction('UPDATE_INSURANCE_DETAILS');


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

    }
}

const updateODOSaga = function* (action) {
    try {
        const response = yield call(updateODO, action.payload);
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

const updateRevenueLicenseSaga = function* (action) {
    try {
        const response = yield call(updateRevenueLicense, action.payload);
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

const updateInsuranceDetailsSaga = function* (action) {
    try {
        const response = yield call(updateInsuranceDetails, action.payload);
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
    yield takeLatest(updateODOAction, updateODOSaga)
    yield takeLatest(updateRevenueLicenseAction, updateRevenueLicenseSaga)
    yield takeLatest(updateInsuranceDetailsAction, updateInsuranceDetailsSaga)

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
    },
    initialState
);