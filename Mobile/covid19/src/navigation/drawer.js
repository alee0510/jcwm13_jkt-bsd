import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FeedNav from '../navigation/feed';
import LogOut from '../screens/logout';

const Drawer = createDrawerNavigator();

const DrawerNav = () => (
    <Drawer.Navigator>
        <Drawer.Screen name="Feed" component={FeedNav} />
        <Drawer.Screen name="Account" component={LogOut} />
    </Drawer.Navigator>
);

export default DrawerNav;
