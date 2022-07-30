import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {LogsScreen, ResourcesScreen, TrackScreen, WageScreen } from '../Screens'

const Tab = createBottomTabNavigator();

const MainNav = ()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name="Track" component={TrackScreen} />
            <Tab.Screen name="Logs" component={LogsScreen} />
            <Tab.Screen name="Resources" component={ResourcesScreen} />
            <Tab.Screen name="Wage" component={WageScreen} />
        </Tab.Navigator>
    )
}

export default MainNav


