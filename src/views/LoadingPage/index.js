import React, { useEffect } from 'react';
import { Text } from 'react-native';
import ROUTES from './../../consts';

function LoadingPage({ navigation }) {
    useEffect(() => navigation.navigate(ROUTES.login));
    return <Text>Loading Page</Text>;
}

export default LoadingPage;