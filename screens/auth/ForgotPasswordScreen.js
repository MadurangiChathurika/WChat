import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, TouchableOpacity, Image } from 'react-native';
import * as firebase from 'firebase';
import { Appbar } from 'react-native-paper';

export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };
    }

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Password reset email has been sent.");
            }, (error) => {
                Alert.alert(error.message);
            });
    }

    _goBack = () => {
        this.props.navigation.navigate('LoginScreen');
    }

    render() {
        return (
            <View>
                <Appbar.Header style = {{backgroundColor:"green"}}>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content title="ForgotPassword Page" />
                </Appbar.Header>
                <View style={{ paddingTop: 50, alignItems: "center" }}>

                    <View>
                        <Image
                            source={require("../assets/forgot.jpg")}
                            style={{ width: 200, height: 200, alignSelf: "center" }}>
                        </Image>
                    </View>
                    <View style={{ paddingTop: 30 }} />
                    <TextInput style={{ width: 250, height: 40, borderWidth: 1 }}
                        value={this.state.email}
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        placeholder="Enter Your Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <View style={{ paddingTop: 20 }} />
                    <View style={{ padding: 5 }}>
                        < TouchableOpacity
                            onPress={this.onResetPasswordPress}
                            style={styles.buttonlog}>
                            <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Reset Password</Text>
                        </TouchableOpacity>
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
        width: 250,
        height: 40,

    },
});