
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Button, Platform } from 'react-native';

const LoginScreen = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Text>This is login screen!</Text>
                <Button style={{ padding: 100 }} title="Login" onPress={() => {
                    props.navigation.navigate({ routeName: 'AccountsList' });
                }}></Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default LoginScreen;
