
import React, { useState } from 'react';
import { View, ScrollView, Button, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native';

const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={50}
            style={styles.screen}>
            <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={e => setEmail(e)}
                        value={email}
                        autoFocus={true}
                        autoCapitalize={'none'}
                        autoCompleteType={'email'}
                        autoCorrect={false}
                        keyboardType={'email-address'}
                        textContentType={'emailAddress'}
                        placeholder={'Enter email'}
                        placeholderTextColor={'gray'}
                        spellCheck={false}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={p => setPassword(p)}
                        value={password}
                        secureTextEntry={true}
                        autoCapitalize={'none'}
                        autoCompleteType={'password'}
                        textContentType={'password'}
                        placeholder={'Enter password'}
                        placeholderTextColor={'gray'}
                        spellCheck={false}
                    />
                    <Button style={styles.loginButton} onPress={() => {
                        props.navigation.navigate({ routeName: 'AccountsList' });
                    }} title="Login">

                    </Button>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

LoginScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Authenticate'
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 60,
        padding: 20,
        backgroundColor: '#DDDDDD',
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    textInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 50,
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        borderLeftWidth: 0
    }
});

export default LoginScreen;
