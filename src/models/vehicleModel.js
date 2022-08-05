import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {addNewVehicle, getVehicleDetails} from "../services/vehicleService";
import {setLoggedUserDataAction} from "./authModel";


export const addNewVehicleAction = createAction('ADD_NEW_VEHICLE');
export const getVehicleAction = createAction('GET_VEHICLE');
export const setVehicleDataAction = createAction('SET_VEHICLE_DATA');


const addNewVehicleSaga = function* (action) {
    try {
        console.log("saga")
        const response = yield call(addNewVehicle, action.payload);
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

const getVehicleSaga = function* (action) {
    try {
        const response = yield call(getVehicleDetails, action.payload);
        yield put(setVehicleDataAction(response.data.vehicles))
        console.log(response)
    } catch (e) {

    }
}

export const vehicleRootSaga = function* () {
    yield takeLatest(addNewVehicleAction, addNewVehicleSaga);
    yield takeLatest(getVehicleAction, getVehicleSaga)

};


const initialState = {
    vehicleDetails: null,
};

export const vehicleReducer = createReducer(
    {
        [setVehicleDataAction]: (state, payload) => {
            return {
                ...state,
                vehicleDetails:payload
            };
        },
    },
    initialState
);