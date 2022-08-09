import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {authReducer, authRootSaga, setUserDataAction} from "../models/authModel";
import {vehicleReducer, vehicleRootSaga} from "../models/vehicleModel";
import {driverReducer, driverRootSaga} from "../models/driverModel";

const sagaMiddleware = createSagaMiddleware();
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(
    combineReducers({
        auth: authReducer,
        vehicleData:vehicleReducer,
        driver:driverReducer,
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

const rootSagas = [authRootSaga,vehicleRootSaga,driverRootSaga];
rootSagas.forEach(sagaMiddleware.run);

//to set dat on reload
store.dispatch(setUserDataAction());