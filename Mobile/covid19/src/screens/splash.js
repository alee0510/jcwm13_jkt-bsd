import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// import icon
import { coronavirus } from '../assests/icons';

const SplashScreen = () => (
    <View style={styles.root}>
        <View style={styles.imageContainer}>
            <Image source={coronavirus} style={styles.image} />
        </View>
        <Text style={styles.title}>COVID 19</Text>
    </View>
);

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 130,
        height: 130,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ef5777',
        marginTop: '5%',
    },
});

export default SplashScreen;
