import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import screen or main navigation
import SplashNav from './splash'

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <SplashNav />
        </NavigationContainer>
    );
};

export default MainNavigation;
