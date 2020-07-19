import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go Login" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

export default Home;