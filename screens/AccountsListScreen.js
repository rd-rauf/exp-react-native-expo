
import React, { useEffect, useState, useCallback } from 'react';
import { Platform, View, ScrollView, Text, StyleSheet, ActivityIndicator, Alert, Button, FlatList, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/UI/HeaderButton';
import * as accountActions from '../store/actions/accounts';
import Colors from '../constants/Colors';

const renderAccountListItem = (itemData) => {
    return (
        <View>
            <TouchableOpacity
                style={{ padding: 10, paddingTop: 20 }}
                onPress={() => {
                    Alert.alert("Item Selected: " + itemData.item.accountName);
                }} >
                <Text>{itemData.item.accountName}</Text>
            </TouchableOpacity>
        </View>
    );
}

const AccountsListScreen = (props) => {
    const allAccounts = useSelector(state => state.accounts.accounts);
    const dispatch = useDispatch();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const loadAccounts = useCallback(async () => {
        setError(null);
        setIsRefreshing(true);
        try {
            await dispatch(accountActions.getAccounts());
        } catch (err) {
            setError(err.message);
        }
        setIsRefreshing(false);
    }, [dispatch, setIsLoading, setError]);

    useEffect(() => {
        const willFocusSub = props.navigation.addListener(
            'willFocus',
            loadAccounts
        );

        return () => {
            willFocusSub.remove();
        };
    }, [loadAccounts]);

    useEffect(() => {
        setIsLoading(true);
        loadAccounts()
            .then(() => {
                setIsLoading(false);
            });
        loadAccounts();
    }, [dispatch, loadAccounts]);

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>An error occurred!</Text>
                <Button
                    title="Try again"
                    onPress={loadProducts}
                    color={Colors.primary}
                />
            </View>
        );
    }

    if (isLoading) {
        return (
            <ActivityIndicator size="large" color={Colors.primary} style={styles.centered} />
        );
    }

    if (!isLoading && allAccounts.length == 0) {
        return (
            <View style={styles.centered}>
                <Text>No accounts exist. Please create one</Text>
            </View>
        );
    }

    return (
        <FlatList
            onRefresh={loadAccounts}
            refreshing={isRefreshing}
            numColumns={1}
            data={allAccounts}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={renderAccountListItem} >
        </FlatList>
    );
}

AccountsListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Accounts',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 20
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default AccountsListScreen;
