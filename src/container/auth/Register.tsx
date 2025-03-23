import React, {useEffect, useRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {Button, Input, Text, XStack, YStack} from 'tamagui';
import {useRegisterUserMutation} from './authApi';
import {useDispatch, useSelector} from 'react-redux';
import {
  setIsLoading,
  setRegisteratonSuccessfull,
} from '../../redux/slices/authSlice';
import AuthButton from './common';

const Register = ({navigation}: any) => {
  const [registerUser] = useRegisterUserMutation();
  const {registrationSuccessfull} = useSelector((store: any) => store.auth);
  const dispatch = useDispatch();
  const userInput = useRef({email: '', password: '', name: ''});

  const handleSubmit = () => {
    let {email, password, name} = userInput.current;
    email = email.trim();
    password = password.trim();
    name = name.trim();

    if (email && password) {
      const userData = {email, password, name};
      dispatch(setIsLoading(true));

      registerUser(userData);
    }
  };

  useEffect(() => {
    if (registrationSuccessfull) {
      navigation.navigate('Login');
      dispatch(setRegisteratonSuccessfull(false));
    }
  }, [registrationSuccessfull]);

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
            onChangeText={v => (userInput.current.name = v)}
            placeholder="Username"
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
              Ulready Have An Account,{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text color={'yellow'}>Login</Text>
            </TouchableOpacity>
          </XStack>

          <AuthButton title="Register" handleSubmit={handleSubmit} />

          <Button
            onPress={handleSubmit}
            backgroundColor="green"
            color={'white'}
            fontSize={18}></Button>
        </YStack>
      </YStack>
    </YStack>
  );
};

export default Register;
