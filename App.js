import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import ReduxThunk from 'redux-thunk';

import accountsReducer from './store/reducers/accounts';
import MainNavigator from './navigation/MainNavigation';

const rootReducer = combineReducers({
  accounts: accountsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const loadFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={() => loadFonts()} onFinish={() => setFontLoaded(true)} />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}