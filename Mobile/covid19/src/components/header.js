import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const AppBar = ({ navigation }) => (
    <Header
        containerStyle={styles.header}
        leftComponent={
            <Icon
                type="material-community"
                name="menu"
                color="white"
                onPress={() => navigation.openDrawer()}
            />
        }
        centerComponent={{
            text: 'Covid-19',
            style: styles.headerTitle,
        }}
        rightComponent={{
            icon: 'bell',
            color: 'white',
            type: 'material-community',
        }}
    />
);

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ef5777',
        height: 100,
        borderWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: '5%',
    },
    headerTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default AppBar;
