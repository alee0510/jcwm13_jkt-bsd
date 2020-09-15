import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CommonActions } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { LogOutAction } from '../actions';

const { useEffect } = React;

const LogOut = ({ navigation }) => {
    const { username, loading } = useSelector((state) => {
        return {
            username: state.user.username,
            loading: state.user.loading,
        };
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if (!username) {
            const ResetAction = CommonActions.reset({
                index: 0,
                routes: [{ name: 'login' }],
            });

            navigation.dispatch(ResetAction);
        }
    });

    const _onBtnLogOut = () => {
        dispatch(LogOutAction());
    };

    return (
        <View style={styles.root}>
            <Button
                title="Log Out"
                buttonStyle={styles.button}
                onPress={_onBtnLogOut}
                loading={loading}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '10%',
    },
    button: {
        backgroundColor: '#ef5777',
        width: 200,
    },
});

export default LogOut;
