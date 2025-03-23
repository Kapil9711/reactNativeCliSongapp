import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardHome from '../container/dashboard/DashboardHome';
import DashboardLayout from '../layouts/DashboardLayout';

const DashboardStack = createNativeStackNavigator();

const DashboardScreen = () => {
  return (
    <DashboardLayout>
      <DashboardStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="DashboardHome">
        <DashboardStack.Screen name="DashboardHome" component={DashboardHome} />
        <DashboardStack.Screen name="Favorite" component={Favorite} />
      </DashboardStack.Navigator>
    </DashboardLayout>
  );
};

const Favorite = () => {
  return (
    <View>
      <Text>Favorite</Text>
    </View>
  );
};

export default DashboardScreen;
