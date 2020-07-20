import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../views/Home';
import Login from './../views/Login';
import Profile from './../views/Profile';
import LoadingPage from './../views/LoadingPage';

const Stack = createStackNavigator();

const Router = () => {
    return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="LoadingPage">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Profile" component={Profile} />
				<Stack.Screen name="LoadingPage" component={LoadingPage} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Router;