import React from 'react';
import { Text, StyleSheet, Image, View, TextInput, TouchableOpacity, Alert, } from 'react-native';
import * as firebase from 'firebase';
import { Appbar } from 'react-native-paper';

export default class ChangeEmailScreen extends React.Component {

  _goBack = () => {
    this.props.navigation.navigate('TestScreen')
  }

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newEmail: "",
    };
  }

  // Reauthenticates the current user and returns a promise...
  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }

  // Changes user's email...
  onChangeEmailPress = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      user.updateEmail(this.state.newEmail).then(() => {
        Alert.alert("Email was changed");
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }

  render() {
    return (

      <View style={{ flex: 1, flexDirection: "column" }}>

        <Appbar.Header style={{ backgroundColor: "green" }}>
          <Appbar.BackAction
            onPress={this._goBack}
          />
          <Appbar.Content
            title="Change Email"
          />
        </Appbar.Header>

        <View style={{ paddingTop: 100, alignItems: "center" }}>

          <TextInput style={styles.textInput} value={this.state.currentPassword}
            placeholder="Current Password" autoCapitalize="none" secureTextEntry={true}
            onChangeText={(text) => { this.setState({ currentPassword: text }) }}
          />

          <View style={{ paddingTop: 20 }} />
          <TextInput style={styles.textInput} value={this.state.newEmail}
            placeholder="New Email" autoCapitalize="none" keyboardType="email-address"
            onChangeText={(text) => { this.setState({ newEmail: text }) }}
          />

          <View style={{ paddingTop: 30 }} />

          <View style={{ Padding: 5 }}>
            < TouchableOpacity
              onPress={this.onChangeEmailPress}
              style={styles.buttonlog}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Change Email</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 50 }}>
            <Image
              source={require("../assets/changemail.png")}
              style={{ width: 150, height: 150, alignSelf: "center" }}>
            </Image>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
  textInput: { width: 250, height: 40, borderWidth: 1 },
  buttonlog: {
    backgroundColor: "green",
    padding: 5,
    borderRadius: 5,
    width: 250,
    height: 40,

  },

});