import React from 'react';
import { Icon } from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import screen
import Home from '../screens/home';
import Data from '../screens/data';

const Tab = createBottomTabNavigator();

const FeedNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'data') {
                        iconName = 'table-clock';
                    } else if ((route.name = 'account')) {
                        iconName = focused ? 'account' : 'account-outline';
                    }
                    return (
                        <Icon
                            type="material-community"
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },
            })}
            tabBarOptions={{
                activeTintColor: '#ef5777',
                inactiveTintColor: '#1e272e',
                showLabel: false,
            }}>
            <Tab.Screen name="home" component={Home} />
            <Tab.Screen name="data" component={Data} />
        </Tab.Navigator>
    );
};

export default FeedNav;
