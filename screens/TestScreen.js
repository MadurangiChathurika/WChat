import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Appbar } from 'react-native-paper';
import * as firebase from 'firebase';

export default class TestScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  }

  // Occurs when signout is pressed...
  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  //go to change password page
  onChangePassword = () => {
    this.props.navigation.navigate('ChangePasswordScreen');
  }

  //go to change email page
  onChangeEmail = () => {
    this.props.navigation.navigate('ChangeEmailScreen');
  }

  //go to forgot password page
  onForgotPassword = () => {
    this.props.navigation.navigate('ForgotPasswordScreen');
  }

  //go to home page
  _goBack = () => {
    this.props.navigation.navigate('HomeScreen')
  }

  render() {
    return (

      <View>
        <Appbar.Header style={{ backgroundColor: "green" }}>
          {/* <Appbar.BackAction
            onPress={this._goBack}
          /> */}
          <Appbar.Content
            title="Setting Page"
          />
        </Appbar.Header>
        <View style={styles.circle} />
        <View style={{ paddingTop: 60 }}>

          <View style={styles.container}>
            < TouchableOpacity
              onPress={this.onSignoutPress}
              style={styles.buttonlog}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Sign out</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15 }} />
          <View style={styles.container}>
            < TouchableOpacity
              onPress={this.onChangePassword}
              style={styles.buttonlog}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Change Password</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15 }} />
          <View style={styles.container}>
            < TouchableOpacity
              onPress={this.onChangeEmail}
              style={styles.buttonlog}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Change Email</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginTop: 15 }} />
          <View style={styles.container}>
            < TouchableOpacity
              onPress={this.onForgotPassword}
              style={styles.buttonlog}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Forgot Password</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            < TouchableOpacity
              onPress={this._goBack}
              style={styles.button}>
              <Text style={{ fontSize: 20, color: 'green', textAlign: "center" }}>Go Back</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Image
              source={require("../assets/setting.jpg")}
              style={{ width: 200, height: 200, alignSelf: "center" }}>
            </Image>
          </View>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({

  buttonlog: {
    backgroundColor: "green",
    padding: 5,
    borderRadius: 5,
    width: 320,
    height: 40,

  },
  button: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    width: 250,
    height: 40,

  },

  container: {
    padding: 5,
    alignItems: "center",
  },

  circle: {
    width: 1500,
    height: 1500,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20
  },

});





