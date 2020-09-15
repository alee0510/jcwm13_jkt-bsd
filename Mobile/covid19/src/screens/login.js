import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Input, Button, Icon } from 'react-native-elements';

import { LoginAction } from '../actions';

// import icons
import { virus_01 } from '../assests/icons';

const { useState, useEffect } = React;

const Login = ({ navigation }) => {
    const [user, setUser] = useState('');
    const [password, setpassword] = useState('');
    const [visible, setVisible] = useState(false);

    const { username, loading } = useSelector((state) => {
        return {
            username: state.user.username,
            loading: state.user.loading,
        };
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if (username) {
            navigation.navigate('drawer-nav', { screen: 'Feed' });
        }
    });

    const _onBtnLogin = () => {
        if (!user || !password) return;
        dispatch(LoginAction({ username: user, password }));
    };

    return (
        <View style={styles.root}>
            <View style={styles.imageContainer}>
                <Image source={virus_01} style={styles.image} />
            </View>
            <Text style={styles.title}>Login</Text>
            <Input
                placeholder="ex. username"
                label="Username"
                leftIcon={<Icon name="person" type="material" />}
                containerStyle={styles.input}
                value={user}
                onChangeText={(value) => setUser(value)}
            />
            <Input
                placeholder="ex. *****"
                label="Password"
                leftIcon={
                    <Icon
                        name={visible ? 'visibility' : 'visibility-off'}
                        type="material"
                        onPress={() => setVisible((prevState) => !prevState)}
                    />
                }
                secureTextEntry={!visible}
                containerStyle={styles.input}
                value={password}
                onChangeText={(value) => setpassword(value)}
            />
            <Button
                title="Login"
                buttonStyle={styles.button}
                onPress={_onBtnLogin}
                loading={loading}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: '10%',
        paddingVertical: '18%',
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        marginBottom: '5%',
        color: '#ef5777',
    },
    input: {
        margin: 0,
        paddingHorizontal: 0,
        marginTop: '3%',
    },
    button: {
        backgroundColor: '#ef5777',
        marginTop: '5%',
    },
    imageContainer: {
        height: 200,
        width: 200,
        alignSelf: 'flex-end',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default Login;
