import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { ChekLoginAction } from '../actions';

// import screen or navigator
import DrawerNav from './drawer';
import Login from '../screens/login';
import SplahScreen from '../screens/splash';

const { useEffect } = React;
const Stack = createStackNavigator();

const SplashNav = () => {
    const { token, loading } = useSelector((state) => {
        return {
            token: state.user.username,
            loading: state.user.loading,
        };
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ChekLoginAction());
    }, []);

    if (loading && !token) {
        return <SplahScreen />;
    }

    return (
        <Stack.Navigator headerMode="none">
            {token ? (
                <Stack.Screen name="drawer-nav" component={DrawerNav} />
            ) : (
                <Stack.Screen name="login" component={Login} />
            )}
        </Stack.Navigator>
    );
};

export default SplashNav;
