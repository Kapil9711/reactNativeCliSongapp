import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../container/auth/Login';

const AuthStack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="login">
      <AuthStack.Screen name="login" component={Login} />
      <AuthStack.Screen name="register" component={Register} />
    </AuthStack.Navigator>
  );
};

const Register = () => {
  return (
    <View>
      <Text>Register</Text>
    </View>
  );
};

export default AuthScreen;
