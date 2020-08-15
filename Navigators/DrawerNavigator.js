import * as React from 'react';
import { Button, Text, Animated, View } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';


import { TabNavigator } from "./StackNavigator";
import SideMenu from "../Components/Common/Sidemenu";


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="TabNavigator" drawerContent={(props) => <SideMenu  {...props} />} drawerType={"front"} drawerStyle={{ width: '80%' }}>
            <Drawer.Screen name="TabNavigator" component={TabNavigator} />
        </Drawer.Navigator>
    );
}



