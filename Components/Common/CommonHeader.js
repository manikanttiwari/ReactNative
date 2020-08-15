import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native"

import OpenMenu from "../../Assets/svg/back.svg";

const iconWidth = 19;
const iconHeight = 19;
const HomeHeader = ({ scene, previous, navigation, links, title }) => {
    return (
        <View style={{ flexDirection: "row", paddingHorizontal: 10, alignContent: "space-between", paddingVertical: 10, backgroundColor: "#fff" }}>
            <View style={{ flex: 1, justifyContent: "flex-start", flexDirection: "row" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <OpenMenu width={iconWidth} height={iconHeight} />
                </TouchableOpacity>
                <Text style={{  }}>{title}</Text>
            </View>
        </View>
    );
}

export default HomeHeader;
