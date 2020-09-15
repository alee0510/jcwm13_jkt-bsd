import AsyncStorage from '@react-native-community/async-storage';
import { CHECK_LOGIN_START, CHECK_LOGIN_END, LOG_IN, LOG_OUT } from './helpers';

export const LoginAction = ({ username }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: CHECK_LOGIN_START });

            dispatch({ type: LOG_IN, payload: username });
            await AsyncStorage.setItem('token', username);

            dispatch({ type: CHECK_LOGIN_END });
        } catch (err) {
            console.log(err);
            dispatch({ type: CHECK_LOGIN_END });
        }
    };
};

export const ChekLoginAction = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: CHECK_LOGIN_START });

            const username = await AsyncStorage.getItem('token');
            if (!username) throw 'no token.';

            dispatch({ type: LOG_IN, payload: username });

            dispatch({ type: CHECK_LOGIN_END });
        } catch (err) {
            console.log(err);
            dispatch({ type: CHECK_LOGIN_END });
        }
    };
};

export const LogOutAction = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.clear();
            dispatch({ type: LOG_OUT });
        } catch (err) {
            console.log(err);
        }
    };
};
