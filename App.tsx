import React, {useEffect} from 'react';

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
import DashboardScreen from './src/screens/DashboardScreen';

import TrackPlayer from 'react-native-track-player';

// toast

const RootStack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    const checkService = async () => {
      const isRunning = await TrackPlayer.isServiceRunning();
      console.log('Is service running?:', isRunning);
    };
    checkService();
  }, []);

  return (
    <SafeAreaViewProvider>
      <TamaguiProviderContext>
        <Provider store={store}>
          <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
              <RootStack.Screen name="Home" component={HomeScreen} />
              <RootStack.Screen name="Auth" component={AuthScreen} />
              <RootStack.Screen name="Dashboard" component={DashboardScreen} />
            </RootStack.Navigator>
          </NavigationContainer>
        </Provider>
      </TamaguiProviderContext>
    </SafeAreaViewProvider>
  );
};

export default App;
