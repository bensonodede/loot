import React from 'react';
import { ActivityIndicator, Button, StatusBar, StyleSheet, View, Text, TextInput } from 'react-native';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
	};

	render() {
		return (
			<View style={{ flex: 1, display: 'flex' }}>
				<View>
					<Text>This is the homepage!!</Text>
				</View>
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
