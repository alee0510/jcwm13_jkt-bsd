import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { GetCovidGlobalSummary } from '../actions';

import AppBar from '../components/header';
import InfoCard from '../components/card';
import Tips from '../components/tips';

const Home = ({ navigation }) => {
    const { global } = useSelector((state) => {
        return {
            global: state.covid.global,
        };
    });
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(GetCovidGlobalSummary());
    }, []);

    return (
        <View style={styles.root}>
            <AppBar navigation={navigation} />
            <View style={styles.cardContainer}>
                <Text style={styles.title}>Coronavirus Live Update</Text>
                <InfoCard
                    confirm={global.TotalConfirmed}
                    newconfirm={global.NewConfirmed}
                    recovered={global.TotalRecovered}
                    newrecovered={global.NewRecovered}
                    deaths={global.TotalDeaths}
                    newdeaths={global.NewDeaths}
                />
            </View>
            <View style={styles.tipsContainer}>
                <Text style={styles.tipsTitle}>Health Tips</Text>
                <Tips />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 20,
        paddingBottom: '3%',
        paddingHorizontal: '3%',
        fontWeight: '700',
        color: 'white',
    },
    cardContainer: {
        height: '30%',
        paddingHorizontal: '3%',
        paddingVertical: '3%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#ef5777',
    },
    tipsTitle: {
        fontSize: 20,
        paddingBottom: '2%',
        paddingHorizontal: '4%',
        color: 'black',
        fontWeight: '600',
    },
    tipsContainer: {
        flex: 1,
        marginTop: '8%',
        paddingHorizontal: '3%',
    },
});

export default Home;
