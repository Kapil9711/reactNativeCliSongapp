import React from 'react';
import {Input, Text, View, XStack} from 'tamagui';
import CustomDrawer from './CustomDrawer';

const Header = () => {
  return (
    <View height={60}>
      <XStack justifyContent="flex-start" alignItems="center">
        <CustomDrawer />
        <Input width={'60%'} />
        <View width={'16%'}></View>
      </XStack>
    </View>
  );
};

export default Header;
