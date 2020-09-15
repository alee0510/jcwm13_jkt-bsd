import { combineReducers } from 'redux';
import {
    GET_SUMMARY,
    GET_COUNTRY,
    CHECK_LOGIN_START,
    CHECK_LOGIN_END,
    LOG_IN,
    LOG_OUT,
} from '../actions';

const COVID_STATE = {
    global: {},
    data: [],
    country: {},
};

const CovidReducer = (state = COVID_STATE, action) => {
    switch (action.type) {
        case GET_SUMMARY:
            return {
                ...state,
                global: action.payload.Global,
                data: action.payload.Countries,
            };
        case GET_COUNTRY:
            return {
                ...state,
                country: action.payload,
            };
        default:
            return state;
    }
};

const USER_STATE = {
    loading: false,
    username: null,
};

const UserReducer = (state = USER_STATE, action) => {
    switch (action.type) {
        case CHECK_LOGIN_START:
            return { ...state, loading: true };
        case CHECK_LOGIN_END:
            return { ...state, loading: false };
        case LOG_IN:
            return { ...state, username: action.payload };
        case LOG_OUT:
            return USER_STATE;
        default:
            return state;
    }
};

export default combineReducers({ covid: CovidReducer, user: UserReducer });
