import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {addNewDriver, assignVehicleToDriver, getVehicleDetails, searchDrivers} from "../services/driverService";



export const addNewDriverAction = createAction('ADD_NEW_DRIVER');
export const getDriversAction = createAction('GET_DRIVERS');
export const setDriverDataAction = createAction('SET_DRIVER_DATA');
export const searchDriversAction = createAction('SEARCH_DRIVERS');
export const assignVehicleToDriverAction = createAction('ASSIGN_VEHICLES_TO_DRIVERS');


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
        console.log("driver")
        const response = yield call(getVehicleDetails, action.payload);
        yield put(setDriverDataAction(response.data.drivers))
        console.log(response)
    } catch (e) {

    }
}

const searchDriversSaga = function* (action) {
    try {
        console.log("Search driver")
        const response = yield call(searchDrivers, action.payload);
        yield put(setDriverDataAction(response.data.drivers))
        console.log(response)
    } catch (e) {
        if (e.response.status==403){
            message.error(
                {
                    content: "Session expired Re login",
                    style: {
                        marginTop: '50vh',
                        color: 'red'
                    },
                });
        }
    }
}

const assignVehicleToDriverSaga = function* (action) {
    try {
        console.log("assign driver")
        const response = yield call(assignVehicleToDriver, action.payload);
        let msg =''
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
        console.log(response)

    } catch (e) {
        console.log(e)
    }
}

export const driverRootSaga = function* () {
    yield takeLatest(addNewDriverAction, addNewDriverSaga);
    yield takeLatest(getDriversAction, getDriversSaga)
    yield takeLatest(searchDriversAction, searchDriversSaga)
    yield takeLatest(assignVehicleToDriverAction, assignVehicleToDriverSaga)

};


const initialState = {
    driverDetails: null,
};

export const driverReducer = createReducer(
    {
        [setDriverDataAction]: (state, payload) => {
            return {
                ...state,
                driverDetails:payload
            };
        },
    },
    initialState
);