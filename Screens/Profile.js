import React from "react";
import { Text, View } from "react-native";
import styles from "../Components/Common/CommonStyle"

export default class MainHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={{ alignItems: "center", justifyContent: "center" }}>

            <Text>Profile</Text>
        </View >
    }

}
