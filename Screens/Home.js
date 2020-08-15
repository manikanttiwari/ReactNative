import React from "react";
import { Text, View } from "react-native";
import styles from "../Components/Common/CommonStyle"

export default class MainHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={{flex:1, alignItems: "center", justifyContent: "center" }}>

            <Text>Home</Text>
        </View >
    }

}
