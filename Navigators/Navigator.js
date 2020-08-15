import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from "./DrawerNavigator";
import LoginScreen from "../Screens/Login";
import RegisterScreen from "../Screens/Register";

const AuthContext = React.createContext();

const MainStack = createStackNavigator();
function switchNavigator() {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: 'RESTORE_TOKEN', token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async data => {

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: 'SIGN_OUT' }),
            signUp: async data => {

                dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );
    return (
        <AuthContext.Provider value={authContext}>
            <MainStack.Navigator initialRouteName={"LoginScreen"} mode={"card"} headerMode={"screen"}>


                <MainStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
                <MainStack.Screen name="RegisterScreen" component={RegisterScreen} options={{
                    headerShown: false
                }} />
                <MainStack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{ headerShown: false }} />
            </MainStack.Navigator>
        </AuthContext.Provider>
    );
}

export default switchNavigator;