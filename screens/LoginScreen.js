
import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={e => setEmail(e)}
                    value={email}
                    autoFocus={true}
                    autoCapitalize={'words'}
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
                <TouchableOpacity style={styles.loginButton} onPress={() => {
                    props.navigation.navigate({ routeName: 'AccountsList' });
                }}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

LoginScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Authenticate'
    };
};

const styles = StyleSheet.create({
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
        height: 50,
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
        marginBottom: 10
    }
});

export default LoginScreen;
