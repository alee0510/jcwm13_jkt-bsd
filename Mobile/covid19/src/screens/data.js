import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import Table from 'react-native-paper/lib/commonjs/components/DataTable/DataTable';

const COLOR = ['#4bcffa', '#ffdd59', '#ef5777', '#0be881', '#575fcf'];
const itemsPerPage = 10;

const _Header = () => (
    <Table.Header>
        <Table.Title>Region</Table.Title>
        <Table.Title numeric>New Cases</Table.Title>
        <Table.Title numeric>Total Cases</Table.Title>
        <Table.Title numeric>Recovered</Table.Title>
        <Table.Title numeric>Deaths</Table.Title>
    </Table.Header>
);

const Row = ({ region, newcases, total, recovered, deaths }) => (
    <Table.Row>
        <Table.Cell>{region}</Table.Cell>
        <Table.Cell numeric>{newcases}</Table.Cell>
        <Table.Cell numeric>{total}</Table.Cell>
        <Table.Cell numeric>{recovered}</Table.Cell>
        <Table.Cell numeric>{deaths}</Table.Cell>
    </Table.Row>
);

const Data = () => {
    const [page, setPage] = React.useState(0);
    const from = page * itemsPerPage;
    const to = (page + 1) * itemsPerPage;

    const { data } = useSelector((state) => {
        return {
            data: state.covid.data,
        };
    });

    const _TableBody = () => {
        return (data
            ? data.slice(from, to)
            : []
        ).map(
            (
                {
                    Country,
                    NewConfirmed,
                    TotalConfirmed,
                    TotalRecovered,
                    TotalDeaths,
                },
                index,
            ) => (
                <Row
                    key={index}
                    region={Country}
                    newcases={NewConfirmed}
                    total={TotalConfirmed}
                    recovered={TotalRecovered}
                    deaths={TotalDeaths}
                />
            ),
        );
    };

    // console.log(data);
    return (
        <View style={styles.root}>
            <Header
                containerStyle={styles.header}
                centerComponent={{ text: 'Live Update', style: styles.headerTitle }}
            />
            <Table style={styles.table}>
                {_Header()}
                {_TableBody()}
                <Table.Pagination
                    page={page}
                    numberOfPages={Math.floor(data.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${data.length}`}
                />
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: '#ef5777',
        height: 100,
        borderWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: '5%',
    },
    headerTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: '700',
    },
    table: {
        flex: 1,
        paddingHorizontal: '2%',
    },
    tableTitle: {
        fontSize: 12,
        fontWeight: '700',
        margin: 20,
        padding: 20,
    },
});

export default Data;
