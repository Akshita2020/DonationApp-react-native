import React, {useRef, useEffect} from 'react';
import {AppState} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './navigation/RootNavigation';
import {Provider} from 'react-redux';
import store, {persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {checkToken} from './api/users';
import {STRIPE_PUBLISHABLE_KEY} from '@env';
function App() {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('you have come back to the app');
          await checkToken();
        }
        appState.current = nextAppState;
      },
    );
    console.log('application has rendered');
    checkToken();
  });

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
