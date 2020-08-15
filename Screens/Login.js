import React from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    _signUpPageHandler = () => {
        this.props.navigation.navigate('RegisterScreen')
    }
    render() {
        return <View style={styles.container}>
            <Text style={{ color: '#538ad4', fontSize: 18 }}>Log in to QR Scanner</Text>
            <View style={styles.inputContainer}>
                <View style={{ width: '100%', marginTop: 10 }}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="email/phone"
                        placeholderTextColor='#bcc0c4'
                    />
                    <TextInput
                        style={styles.textfield}
                        placeholder="password"
                        placeholderTextColor='#bcc0c4'
                    />
                </View>

                <Text style={{ color: '#538ad4' }}>Forget your password?</Text>
                <View style={{ flexDirection: "row", justifyContent: 'center', }}>
                    <Text style={{ color: '#9b9e9c' }}>Create an account.</Text>
                    <Text onPress={() => this._signUpPageHandler()} style={{ color: '#538ad4', marginLeft: 5 }}>Sign up</Text>
                </View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate("DrawerNavigator")
                }} >
                    <View style={{ width: 50, height: 50, borderColor: "#000", borderWidth: 2 }}>

                    </View>
                </TouchableOpacity>

            </View>

        </View>
    }

}
const styles = StyleSheet.create({
    btnStyle: {
        marginTop: 80,
        paddingLeft: 250
    },
    inputContainer: {
        margin: 50,
        height: '40%',
        width: '90%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 10,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'


    },
    textfield: {
        marginBottom: 30,
        height: 50,
        width: '70%',
        borderColor: '#538ad4',
        borderBottomWidth: 1,
        color: '#256095',
        fontSize: 20,
        alignSelf: 'center'
    }
})

export default Login