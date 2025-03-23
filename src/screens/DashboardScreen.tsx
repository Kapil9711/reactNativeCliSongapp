import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

const DashboardStack = createNativeStackNavigator();

const DashboardScreen = () => {
  return (
    <DashboardStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="DashboardHome">
      <DashboardStack.Screen name="DashboardHome" component={DashboardHome} />
      <DashboardStack.Screen name="Favorite" component={Favorite} />
    </DashboardStack.Navigator>
  );
};

const DashboardHome = () => {
  const {user, isLoggedIn} = useSelector((store: any) => store.auth);
  console.log(user, isLoggedIn);
  return (
    <View>
      <Text>Dashboard home</Text>
    </View>
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
