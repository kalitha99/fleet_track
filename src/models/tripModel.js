import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {message} from 'antd';
import {addNewTrip, cancelTrip, endTrip, getTrips, startTrip} from "../services/tripService";


export const enterTripDetailsAction = createAction('ENTER_TRIP_DETAILS');
export const cancelTripAction = createAction('CANCEL_TRIP');
export const getTripsAction = createAction('GET_TRIP');
export const setTripsAction = createAction('SET_TRIP');
export const startTripAction = createAction('START_TRIP');
export const endTripAction = createAction('END_TRIP');

const enterTripDetailsSaga = function* (action) {
    try {
        console.log(action.payload)
        const response = yield call(addNewTrip, action.payload);
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

const cancelTripSaga = function* (action) {
    try {
        console.log("cancel Trip")
        const response = yield call(cancelTrip, action.payload);
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
        console.log(response)

    } catch (e) {
        console.log(e)
    }
}

const getTripsSaga = function* (action) {
    try {
        const response = yield call(getTrips, action.payload);
        yield put(setTripsAction(response.data.trip))


        console.log(response)

    } catch (e) {
        console.log(e)
    }
}

const startTripSaga = function* (action) {
    try {
        const response = yield call(startTrip, action.payload);
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
        console.log(response)

    } catch (e) {
        console.log(e)
    }
}

const endTripSaga = function* (action) {
    try {
        const response = yield call(endTrip, action.payload);
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
        console.log(response)

    } catch (e) {
        console.log(e)
    }
}


export const tripRootSaga = function* () {
    yield takeLatest(enterTripDetailsAction, enterTripDetailsSaga);
    yield takeLatest(cancelTripAction, cancelTripSaga)
    yield takeLatest(getTripsAction, getTripsSaga)
    yield takeLatest(startTripAction, startTripSaga)
    yield takeLatest(endTripAction, endTripSaga)
}

const initialState = {
    tripDetails: null,
};

export const tripReducer = createReducer({
        [setTripsAction]: (state, payload) => {
            return {
                ...state,
                tripData: payload
            };
        },
    },
    initialState);