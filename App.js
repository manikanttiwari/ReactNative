import React from "react";
// import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./SRC/Navigators/Navigator";
// import configureStore from "./SRC/Redux/configureStore"

// const store = configureStore()

// Render the app container component with the provider around it
function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
    // </Provider>
  );
}
export default App;