import React from 'react';
import { Platform, View, ScrollView, SafeAreaView, Button, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems, DrawerNavigatorItems } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import AccountsListScreen from '../screens/AccountsListScreen';
import HeadsListScreen from '../screens/HeadsListScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
        borderBottomWidth: 1,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary
};

const AccountsNavigator = createStackNavigator({
    AccountsList: {
        screen: AccountsListScreen
    }
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-people' : 'ios-people'}
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions: defaultNavOptions
});

const HeadsNavigator = createStackNavigator({
    HeadsList: {
        screen: HeadsListScreen
    }
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-browsers' : 'ios-browsers'}
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    },
    defaultNavigationOptions: defaultNavOptions
});

const MenuNavigator = createDrawerNavigator(
    {
        Accounts: AccountsNavigator,
        Heads: HeadsNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.primary
        },
        contentComponent: props => (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <DrawerNavigatorItems {...props} />
                    <Button
                        title="Logout"
                        color={Colors.primary}
                        onPress={() => {
                            props.navigation.navigate({ routeName: 'Login' });
                            // dispatch(authActions.logout());
                        }}
                    />
                </SafeAreaView>
            </View>
        )
    }
);

const AuthNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen
        },
    },
    {
        defaultNavigationOptions: defaultNavOptions
    }
)

const MainNavigator = createAnimatedSwitchNavigator({
    Auth: AuthNavigator,
    Menu: MenuNavigator
}, {
    transition: (
        <Transition.Together>
            <Transition.Out
                type="slide-bottom"
                durationMs={400}
                interpolation="easeIn"
            />
            <Transition.In type="fade" durationMs={500} />
        </Transition.Together>
    ),
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default createAppContainer(MainNavigator);
