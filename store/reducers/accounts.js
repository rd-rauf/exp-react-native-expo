// import ACCOUNTS from '../../data/dummy-data';
import {
    DELETE_ACCOUNT,
    CREATE_ACCOUNT,
    UPDATE_ACCOUNT,
    GET_ALL_ACCOUNTS
} from '../actions/accounts';
import Account from '../../models/account';

const initialState = {
    accounts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ACCOUNTS:
            return {
                ...state,
                accounts: action.accounts
            }
        case CREATE_ACCOUNT:
            const newAccount = new Account(
                action.accountData.accountName,
                action.accountData.openingBalance
            );
            return {
                ...state,
                accounts: state.accounts.concat(newAccount)
            };
        /* case UPDATE_ACCOUNT:
            const productIndex = state.userAccounts.findIndex(
                prod => prod.id === action.pid
            );
            const updatedProduct = new Product(
                action.pid,
                state.userAccounts[productIndex].ownerId,
                action.productData.title,
                action.productData.imageUrl,
                action.productData.description,
                state.userAccounts[productIndex].price
            );
            const updatedUserProducts = [...state.userAccounts];
            updatedUserProducts[productIndex] = updatedProduct;
            const availableProductIndex = state.availableAccounts.findIndex(
                prod => prod.id === action.pid
            );
            const updatedAvailableProducts = [...state.availableAccounts];
            updatedAvailableProducts[availableProductIndex] = updatedProduct;
            return {
                ...state,
                availableProducts: updatedAvailableProducts,
                userProducts: updatedUserProducts
            };
        case DELETE_ACCOUNT:
            return {
                ...state,
                userProducts: state.userAccounts.filter(
                    product => product.id !== action.pid
                ),
                availableProducts: state.availableAccounts.filter(
                    product => product.id !== action.pid
                )
            };*/
        default:
            return state;
    }
    return state;
};
