import * as React from 'react';
import { View, Text, Image } from "react-native"
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MatchesIcon from "../Assets/svg/home.svg";
import LeagueIcon from "../Assets/svg/myleague.svg";
import NewsIcon from "../Assets/svg/news.svg";
import AccountIcon from "../Assets/svg/account.svg";

import AMatchesIcon from "../Assets/svg/home_active.svg";
import ALeagueIcon from "../Assets/svg/myleague_active.svg";
import ANewsIcon from "../Assets/svg/news_active.svg";
import AAccountIcon from "../Assets/svg/account_active.svg";

import Home from "../Screens/Home"
import CommonHeader from "../Components/Common/CommonHeader"

const iconWidth = 20;
const iconHeight = 20;

const BottomTab = createBottomTabNavigator();
export const TabNavigator = () => {
    return (
        <BottomTab.Navigator tabBarOptions={{ showIcon: true, labelStyle: { marginBottom: 5 }, style: { paddingVertical: 5 }, activeTintColor: "#006CD8" }}>
            <BottomTab.Screen name={"HomeNavigator"} component={HomeNavigator} options={{
                title: "Matches",
                tabBarIcon: ({ focused }) => { return (focused ? <AMatchesIcon width={iconWidth} height={iconHeight} /> : <MatchesIcon width={iconWidth} height={iconHeight} />) }
            }} />
        </BottomTab.Navigator>
    );
}

const Stack = createStackNavigator();
export const HomeNavigator = () => {
    return (
        <Stack.Navigator mode={"card"} initialRouteName={"Home"} >
            <Stack.Screen name={"Home"} component={Home} options={{
                header: (props) => <CommonHeader {...props} title={"Home"} />
            }} />
        </Stack.Navigator>
    );
}