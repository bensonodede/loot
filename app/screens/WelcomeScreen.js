import React from 'react';
import { ActivityIndicator, Button, StatusBar, StyleSheet, View, Text, TextInput } from 'react-native';

export default class WelcomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	_goToSignupPage = () => {
		this.props.navigation.navigate('Signup');
	};

	_goToLoginPage = () => {
		this.props.navigation.navigate('Login');
	};

	render() {
		return (
			<View style={{ alignItems: 'center', flex: 1 }}>
				<Text>Welcome to the APP!</Text>
				<Button title="Create account" onPress={this._goToSignupPage} />

				<Text>Or</Text>

				<Button title="Login" onPress={this._goToLoginPage} />
			</View>
		);
	}
}

/*
  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
  */
