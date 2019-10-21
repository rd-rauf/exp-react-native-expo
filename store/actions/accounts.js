import Account from "../../models/account";

export const GET_ALL_ACCOUNTS = 'GET_ALL_ACCOUNTS';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

export const deleteAccount = accountId => {
    return { type: DELETE_ACCOUNT, pid: accountId };
};

export const getAccounts = () => {
    return async dispatch => {

        try {
            const response = await fetch('https://trakkr-react-native.firebaseio.com/accounts.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const accountsResponseData = await response.json();
    
            const accounts = [];
            for (const key in accountsResponseData) {
                accounts.push(new Account(
                    key,
                    accountsResponseData[key].accountName,
                    accountsResponseData[key].openingBalance
                ));
            }
    
            dispatch({
                type: GET_ALL_ACCOUNTS,
                accounts: accounts
            });
        } catch (err) {
            throw err;
        }
    }
};

export const createAccount = (accountName, openingBalance) => {
    return async dispatch => {
        const response = await fetch('https://trakkr-react-native.firebaseio.com/accounts.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                accountName,
                openingBalance
            })
        });
        const allAccounts = await response.json();
        dispatch({
            type: GET_ALL_ACCOUNTS,
            payload: allAccounts
        });
    }
};

export const updateAccount = (id, accountName, openingBalance) => {
    return {
        type: UPDATE_ACCOUNT,
        pid: id,
        accountData: {
            accountName,
            openingBalance
        }
    };
};
