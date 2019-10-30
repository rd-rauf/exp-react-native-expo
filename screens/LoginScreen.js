// Login Screen

import React from 'react';
import {
    Platform,
    ScrollView,
    View,
    KeyboardAvoidingView,
    StyleSheet,
    Button
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ExpInput from '../components/UI/Input';
import Card from '../components/UI/Card';
import Colors from '../constants/Colors';

const LoginScreen = props => {
    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}
        >
            <LinearGradient colors={['#ffffff', '#ffffff']} style={styles.gradient}>
                <Card style={styles.authContainer}>
                    <ScrollView>
                        <ExpInput
                            autoFocus={true}
                            id="email"
                            label="E-Mail"
                            keyboardType="email-address"
                            required
                            email
                            autoCapitalize="none"
                            errorText="Please enter a valid email address."
                            onInputChange={() => { }}
                            initialValue=""
                            iconName="ios-mail"
                        />
                        <ExpInput
                            id="password"
                            label="Password"
                            keyboardType="default"
                            secureTextEntry
                            required
                            minLength={5}
                            autoCapitalize="none"
                            errorText="Please enter a valid password."
                            onInputChange={() => { }}
                            initialValue=""
                        />
                        <View style={styles.buttonContainer}>
                            <Button title="Login" color={Colors.primary} onPress={() => { }} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button
                                title="Switch to Sign Up"
                                color={Colors.accent}
                                onPress={() => { }}
                            />
                        </View>
                    </ScrollView>
                </Card>
            </LinearGradient>
        </KeyboardAvoidingView>
    );
};

LoginScreen.navigationOptions = {
    headerTitle: 'Authenticate'
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        maxHeight: 400,
        padding: 20
    },
    buttonContainer: {
        marginTop: 10
    }
});

export default LoginScreen;

