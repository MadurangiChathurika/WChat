import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, TouchableOpacity, TouchableWithoutFeedback, Keyboard, View, StyleSheet, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';


export default class ChatScreen extends React.Component {

    _goBack = () => {
        this.props.navigation.navigate('Login')
    }

    state = {
        messages: []
    }

    get user() {
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        };
    }

    componentDidMount() {
        Fire.get(message =>
            this.setState(previous => ({
                messages: GiftedChat.append(previous.message, message)
            }))
        );
    }

    componentWillUnmount() {
        Fire.off();
    }
    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user} />;

        if (Platform.OS === 'android') {
            return (

                <KeyboardAvoidingView style={{ flex: 1 }}>

                   
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {chat} 
                    </TouchableWithoutFeedback>
                    <View>
                        < TouchableOpacity
                            onPress={this._goBack}
                            style={styles.buttonlog}>
                            <Text style={{ fontSize: 20, color: 'white', textAlign: "center" }}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            );
        }
        return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
    }
}

const styles = StyleSheet.create({
    buttonlog: {
        backgroundColor: "green",
        padding: 5,
        marginLeft: 15,
        borderRadius: 5,
        width: 320,
        height: 40,
        marginTop: 20,
        marginBottom: 20,

    },
});