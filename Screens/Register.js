import React from "react";
import { Text, TextInput, View, StyleSheet, Button, KeyboardAvoidingView } from "react-native";

class Register extends React.Component {
    _loginPageHandler = () => {
        this.props.navigation.navigate('Home')
    }
    render() {
        return <View style={styles.container}>
            <Text style={{ color: '#538ad4', fontSize: 18 }}>Sign up to QR Scanner</Text>
            <View style={styles.inputContainer}>

                <View style={{ width: '100%', marginTop: 10 }}>
                    <TextInput
                        style={styles.textfield}
                        placeholder="name"
                        placeholderTextColor='#bcc0c4'
                    />
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
                    <TextInput
                        style={styles.textfield}
                        placeholder="confirm password"
                        placeholderTextColor='#bcc0c4'
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center', }}>
                    <Text style={{ color: '#9b9e9c' }}>Have an account already?</Text>
                    <Text onPress={() => this._loginPageHandler()} style={{ color: '#538ad4', marginLeft: 5 }}>Log in</Text>
                </View>
                <View style={styles.btnStyle}>
                    <Button title='Sign Up' />
                </View>

            </View>

        </View>
    }

}
const styles = StyleSheet.create({
    // constainer:{
    //     padding
    //     width: '90%',
    //     maxHeight: 350,
    //     borderColor: '#000',
    //     borderWidth: 1,
    //     borderTopEndRadius: 10,
    //     borderTopStartRadius: 10

    // },
    btnStyle: {
        marginTop: 30,
        paddingLeft: 250
    },
    inputContainer: {
        margin: 50,
        height: '75%',
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

export default Register