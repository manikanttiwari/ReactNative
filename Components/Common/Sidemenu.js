import React from "react";
import { Text, View } from "react-native";
import styles from "./CommonStyle"

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={{ alignItems: "center", justifyContent: "center" }}>

            <Text>Side Menu</Text>
        </View >
    }

}