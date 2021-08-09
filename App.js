import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SignUpLogin from './Screens/SignUpLogin.js';
import {AppTabNavigator} from './components/AppTabNavigator'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import {SafeAreaProvider} from 'react-native-safe-area-context'
export default class App extends React.Component{
render(){
return(
<SafeAreaProvider>
<AppContainer/>
</SafeAreaProvider>

)
}
}

const SwitchNavigator= createSwitchNavigator({
  SignUpLogin: {screen: SignUpLogin},
 BottomTabNavigator: {screen: AppTabNavigator}
})


const AppContainer= createAppContainer(SwitchNavigator)