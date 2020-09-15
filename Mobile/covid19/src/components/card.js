import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Text, Card } from 'react-native-elements';

const WIDTH = Dimensions.get('screen').width;
const COLORS = ['#ffd32a', '#0be881', '#575fcf'];

const InfoCard = ({
    confirm,
    recovered,
    deaths,
    newconfirm,
    newrecovered,
    newdeaths,
}) => {
    return (
        <View style={styles.root}>
            <Card
                containerStyle={[styles.card, { backgroundColor: COLORS[0] }]}>
                <Card.Title style={styles.title}>Total</Card.Title>
                <Card.Divider style={styles.divider} />
                <Text style={styles.info}>{confirm}</Text>
                <Text style={styles.details}>+ {newconfirm}</Text>
            </Card>
            <Card
                containerStyle={[styles.card, { backgroundColor: COLORS[1] }]}>
                <Card.Title style={styles.title}>Recovered</Card.Title>
                <Card.Divider style={styles.divider} />
                <Text style={styles.info}>{recovered}</Text>
                <Text style={styles.details}>+ {newrecovered}</Text>
            </Card>
            <Card
                containerStyle={[styles.card, { backgroundColor: COLORS[2] }]}>
                <Card.Title style={styles.title}>Deaths</Card.Title>
                <Card.Divider style={styles.divider} />
                <Text style={styles.info}>{deaths}</Text>
                <Text style={styles.details}>+ {newdeaths}</Text>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
    },
    card: {
        borderRadius: 25,
        flex: 1,
        margin: 8,
        height: WIDTH / 3.5,
        borderWidth: 0,
        padding: 10,
        backgroundColor: COLORS[0],
    },
    title: {
        fontSize: 18,
        color: 'white',
    },
    divider: {
        height: 0.5,
        backgroundColor: 'white',
    },
    info: {
        fontSize: 16,
        alignSelf: 'center',
        marginBottom: 5,
        color: 'white',
    },
    details: {
        fontSize: 10,
        alignSelf: 'center',
        color: 'white',
    },
});

export default InfoCard;
