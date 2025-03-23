import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Spinner, YStack} from 'tamagui';
import {asyncHelper} from '../utils/asyncStorageHelper';
import {useDispatch} from 'react-redux';
import {login} from '../redux/slices/authSlice';
const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  const loginUser = async () => {
    const user = await asyncHelper.getData('user');
    if (user) {
      dispatch(login(user));
      navigation.navigate('Dashboard');
    } else {
      navigation.navigate('Auth');
    }
  };
  useEffect(() => {
    loginUser();
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#0a0909"
        translucent={false}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#0a0909',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <YStack padding="$3" space="$4" alignItems="center">
          <Spinner size="large" color="$green10" scale={1.6} />
        </YStack>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
