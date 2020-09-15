import React from 'react';
import { FlatList, StyleSheet, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import {
    patient,
    handwash,
    quarantine,
    desinfectant,
    calendar,
    vitamin,
} from '../assests/icons';

const tips = [handwash, desinfectant, patient, vitamin, quarantine, calendar];

const WIDTH = Dimensions.get('screen').width;

const Tips = () => {
    const _renderItem = ({ item }) => (
        <Card containerStyle={styles.card}>
            <Card.Image source={item} style={styles.image} />
        </Card>
    );
    return (
        <FlatList
            data={tips}
            keyExtractor={(item, index) => index.toString()}
            renderItem={_renderItem}
            numColumns={3}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: WIDTH / 4,
        borderRadius: 25,
        padding: 25,
        // borderWidth: 0,
    },
    image: {
        height: '100%',
        width: '100%',
    },
});

export default Tips;
