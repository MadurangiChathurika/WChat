import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';
import LoginScreen from './screens/auth/LoginScreen'
import SignupScreen from './screens/auth/SignupScreen'
import ForgotPasswordScreen from './screens/auth/ForgotPasswordScreen'
import HomeScreen from './screens/HomeScreen'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import TestScreen from './screens/TestScreen';
import Login from './screens/Login';
import ChatScreen from './screens/ChatScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import ChangeEmailScreen from './screens/ChangeEmailScreen';

//remove yellow color warning labels
console.disableYellowBox = true;

export default class App extends React.Component {
  render(){
    //Initialize firebase...
      if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
      
    return (
      
      <AppNavigator />
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoginScreen:LoginScreen,
  SignupScreen:SignupScreen,
  ForgotPasswordScreen:ForgotPasswordScreen,
  HomeScreen:HomeScreen,
  TestScreen:TestScreen,
  Login:Login,
  ChatScreen:ChatScreen,
  ChangePasswordScreen:ChangePasswordScreen,
  ChangeEmailScreen:ChangeEmailScreen,
});

const AppNavigator = createAppContainer
(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

