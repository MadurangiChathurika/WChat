import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { Appbar } from 'react-native-paper';

export default class ChangePasswordScreen extends React.Component {

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
            newPassword: "",
        };
    }

    // Occurs when signout is pressed...
    onSignoutPress = () => {
        firebase.auth().signOut();
    }

    // Reauthenticates the current user and returns a promise...
    reauthenticate = (currentPassword) => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    }

    // Changes user's password...
    onChangePasswordPress = () => {
        this.reauthenticate(this.state.currentPassword).then(() => {
            var user = firebase.auth().currentUser;
            user.updatePassword(this.state.newPassword).then(() => {
                Alert.alert("Password was changed");
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
                        title="Change Password"
                    />

                </Appbar.Header>

                <View style={{ paddingTop: 100, alignItems: "center" }}>

                    <TextInput style={styles.textInput} value={this.state.currentPassword}
                        placeholder="Current Password" autoCapitalize="none" secureTextEntry={true}
                        onChangeText={(text) => { this.setState({ currentPassword: text }) }}
                    />

                    <View style={{ paddingTop: 20 }} />

                    <TextInput style={styles.textInput} value={this.state.newPassword}
                        placeholder="New Password" autoCapitalize="none" secureTextEntry={true}
                        onChangeText={(text) => { this.setState({ newPassword: text }) }}
                    />

                    <View style={{ paddingTop: 50 }} />

                    <View style={{ Padding: 5 }}>
                        < TouchableOpacity
                            onPress={this.onChangePasswordPress}
                            style={styles.buttonlog}>
                            <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 50 }}>
                        <Image
                            source={require("../assets/changepassword.jpg")}
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