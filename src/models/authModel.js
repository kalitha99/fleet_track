import {createAction, createReducer} from 'redux-act';
import {call, put, takeLatest} from 'redux-saga/effects';
import {handleSignup, loginUser} from "../services/authServices";
import {message} from 'antd';

export const loginUserAction = createAction('LOGING_USER');
export const signUpAction = createAction('SIGNUP_USER');
export const setLoggedUserDataAction = createAction('SET_LOGGED_USER_DATA');
export const setUserDataAction = createAction('SET_USER_DATA');


const ACCESS_TOKEN = 'ACCESS_TOKEN';
const USERNAME = 'USERNAME';
const ROLE_TYPE = 'ROLE_TYPE';
const EMAIL = 'EMAIL';

//SAGAS
const loginUserSaga = function* (action) {


    try {
        const values = {
            name: action.payload.name,
            password: action.payload.password
        }
        const response = yield call(loginUser, values);
        console.log(response.data)
        sessionStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
        sessionStorage.setItem(USERNAME, response.data.name);
        sessionStorage.setItem(ROLE_TYPE, response.data.roles);
        sessionStorage.setItem(EMAIL, response.data.email);
        yield put(setLoggedUserDataAction({
            name: sessionStorage.USERNAME,
            accessToken: sessionStorage.ACCESS_TOKEN,
            roleType: sessionStorage.ROLE_TYPE,
            email: sessionStorage.getItem(EMAIL)
        }));
        if (response.data.roles === 'admin') {
            action.payload.history.push("/adminHome")
            console.log("admin")
        } else if (response.data.roles == 'driver') {
            console.log(response.data.roles)
            action.payload.history.push("/driverHome")
        }else if (response.data.roles === 'user') {
            action.payload.history.push("/userHome")
        }
    } catch (response) {
        let msg = ''
        if (response.response.data?.msg !== "") {

            msg = response.response.data?.msg
        }

        console.log("fds", response.response.data?.msg)
        message.error(
            {
                content: msg,
                style: {
                    marginTop: '10vh',
                    color: 'red'
                },
            });
    }
}


const signupSaga = function* (action) {

    try {
        const response = yield call(handleSignup, action.payload);

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
        } else  {

            console.log("fds", response.data.error)
            message.error(
                {
                    content: response.data.error,
                    style: {
                        marginTop: '10vh',
                        color: 'red'
                    },
                });
        }
    } catch (e) {
        message.error(e.message);
    }

}


const setUserDataSaga = function* (action) {

    const token = sessionStorage.getItem(ACCESS_TOKEN);
    if (token) {
        yield put(setLoggedUserDataAction({
            name: sessionStorage.USERNAME,
            accessToken: sessionStorage.ACCESS_TOKEN,
            roleType: sessionStorage.ROLE_TYPE
        }));
    }
}


/* Sagas */
export const authRootSaga = function* () {
    yield takeLatest(loginUserAction, loginUserSaga);
    yield takeLatest(setUserDataAction, setUserDataSaga);
    yield takeLatest(signUpAction, signupSaga);
};

const initialState = {
    username: '',
    accessToken: null,
    roleType: null,
};

export const authReducer = createReducer(
    {
        [setLoggedUserDataAction]: (state, payload) => {
            return {
                ...state,
                username: payload.name,
                accessToken: payload.accessToken,
                roleType: payload.roleType
            };
        },
    },
    initialState
);