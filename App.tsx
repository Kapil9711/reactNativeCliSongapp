import React from 'react';

//provider
import SafeAreaViewProvider from './src/providers/SafeAreaViewProvider';
import TamaguiProviderContext from './src/providers/TamaguiProvider';

//screens
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AuthScreen from './src/screens/AuthScreen';

// redux
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

// toast

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaViewProvider>
      <TamaguiProviderContext>
        <Provider store={store}>
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
              <RootStack.Screen name="Home" component={HomeScreen} />
              <RootStack.Screen name="Auth" component={AuthScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
        </Provider>
      </TamaguiProviderContext>
    </SafeAreaViewProvider>
  );
};

export default App;
