import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {addNewVehicle, getVehicleDetails, searchVehicleDetails, updateODO} from "../services/vehicleService";
import {setLoggedUserDataAction} from "./authModel";


export const addNewVehicleAction = createAction('ADD_NEW_VEHICLE');
export const getVehicleAction = createAction('GET_VEHICLE');
export const setVehicleDataAction = createAction('SET_VEHICLE_DATA');
export const searchVehicleDataAction = createAction('SEARCH_VEHICLE_DATA');
export const setEditModalContentAction = createAction('SET_EDIT_MODAL_CONTENT');
export const updateODOAction = createAction('UPDATE_ODO_VEHICLE');


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
        const msg = response.response.data?.msg
        console.log(action.payload)
        message.success(
            {
                content: msg,
                style: {
                    marginTop: '10vh',
                    color: 'green'
                },
            });

    } catch (e) {

    }
}


export const vehicleRootSaga = function* () {
    yield takeLatest(addNewVehicleAction, addNewVehicleSaga);
    yield takeLatest(getVehicleAction, getVehicleSaga)
    yield takeLatest(searchVehicleDataAction, searchVehicleSaga)
    yield takeLatest(updateODOAction, updateODOSaga)

};


const initialState = {
    vehicleDetails: null,
    editModalContent:null,
};

export const vehicleReducer = createReducer(
    {
        [setVehicleDataAction]: (state, payload) => {
            return {
                ...state,
                vehicleDetails:payload
            };
        },
        [setEditModalContentAction]: (state, payload) => {
            return {...state, editModalContent: payload};
        },
    },
    initialState
);