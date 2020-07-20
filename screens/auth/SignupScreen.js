import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';

import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    _goBack = () => {
        this.props.navigation.navigate('LoginScreen')
    }

    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    render() {
        return (
            <View>
                <Appbar.Header style = {{backgroundColor:"green"}}>
                    <Appbar.BackAction
                        onPress={this._goBack}
                    />
                    <Appbar.Content title="Signup Page" />
                </Appbar.Header>
                <View style={{ paddingTop: 50, alignItems: "center" }}>

                    <View>
                        <Image
                            source={require("../assets/signup.png")}
                            style={{ width: 150, height: 150, alignSelf: "center" }}>
                        </Image>
                    </View>
                    <View style={{ paddingTop: 30 }} />
                    <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                        value={this.state.email}
                        onChangeText={(text) => { this.setState({ email: text }) }}
                        placeholder="Email"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={{ paddingTop: 10 }} />

                    <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                        value={this.state.password}
                        onChangeText={(text) => { this.setState({ password: text }) }}
                        placeholder="Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={{ paddingTop: 10 }} />

                    <TextInput style={{ width: 200, height: 40, borderWidth: 1 }}
                        value={this.state.passwordConfirm}
                        onChangeText={(text) => { this.setState({ passwordConfirm: text }) }}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <View style={{ paddingTop: 30 }} />
                    <View style={{ padding: 5 }}>
                        < TouchableOpacity
                            onPress={this.onSignupPress}
                            style={styles.buttonlog}>
                            <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Signup</Text>
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