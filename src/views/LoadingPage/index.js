import React, { useEffect } from 'react';
import { Container, Content, Grid, Spinner } from 'native-base';
import styles from './style';
import ROUTES from './../../consts';

function LoadingPage({ navigation }) {
    useEffect(() => navigation.navigate(ROUTES.login));

    return (
        <Container>
            <Content contentContainerStyle={styles.container}>
                <Grid style={styles.grid}>
                    <Spinner color="blue" />
                </Grid>
            </Content>
        </Container>
    );
}

export default LoadingPage;