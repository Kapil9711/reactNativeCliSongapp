import React, {useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Input, Spinner, Text, View, XStack, YStack} from 'tamagui';
import {useLoginUserMutation} from './authApi';
import {useDispatch, useSelector} from 'react-redux';
import AuthButton from './common';
import {setIsLoading} from '../../redux/slices/authSlice';

const Login = ({navigation}: any) => {
  const [loginUser] = useLoginUserMutation();
  const userInput = useRef({email: '', password: ''});

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let {email, password} = userInput.current;
    email = email.trim();
    password = password.trim();

    if (email && password) {
      const userData = {email, password};
      dispatch(setIsLoading(true));
      loginUser(userData);
    }
  };

  return (
    <YStack
      backgroundColor={'black'}
      flex={1}
      padding="$3"
      justifyContent="center"
      alignItems="center">
      <YStack width={'80%'} gap={35}>
        <YStack gap={20}>
          <Input
            onChangeText={v => (userInput.current.email = v)}
            placeholder="Email"
            size="$4"
            width={'100%'}
            borderWidth={2}
          />
          <Input
            onChangeText={v => (userInput.current.password = v)}
            placeholder="password"
            size="$4"
            width={'100%'}
            borderWidth={2}
          />
        </YStack>

        <YStack gap={11}>
          <XStack paddingLeft={5} alignItems="baseline">
            <Text fontSize={11} color={'white'}>
              Do Not Have An Account,{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text color={'yellow'}>Register</Text>
            </TouchableOpacity>
          </XStack>
          <AuthButton title="Log-In" handleSubmit={handleSubmit} />
        </YStack>
      </YStack>
    </YStack>
  );
};

export default Login;
