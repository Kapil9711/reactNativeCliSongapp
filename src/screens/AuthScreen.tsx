import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../container/auth/Login';
import Register from '../container/auth/Register';

const AuthStack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthScreen;
