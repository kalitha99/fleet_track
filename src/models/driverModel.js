import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {addNewDriver, getVehicleDetails} from "../services/driverService";



export const addNewDriverAction = createAction('ADD_NEW_DRIVER');
export const getDriversAction = createAction('GET_DRIVERS');
export const setDriverDataAction = createAction('SET_DRIVER_DATA');


const addNewDriverSaga = function* (action) {

    try {
        const response = yield call(addNewDriver, action.payload);
        let msg =''
        if (response.data?.msg !== "") {

            msg = response.data?.msg
        }

        console.log("fds",response.data?.msg)
        message.success(
            {
                content: msg,
                style: {
                    marginTop: '10vh',
                    color: 'green'
                },
            });
    }
    catch (e) {

    }
}

const getDriversSaga = function* (action) {
    try {
        const response = yield call(getVehicleDetails, action.payload);
        yield put(setDriverDataAction(response.data.vehicles))
        console.log(response)
    } catch (e) {

    }
}

export const driverRootSaga = function* () {
    yield takeLatest(addNewDriverAction, addNewDriverSaga);
    yield takeLatest(getDriversAction, getDriversSaga)

};


const initialState = {
    driverDetails: null,
};

export const driverReducer = createReducer(
    {
        [setDriverDataAction]: (state, payload) => {
            return {
                ...state,
                vehicleDetails:payload
            };
        },
    },
    initialState
);