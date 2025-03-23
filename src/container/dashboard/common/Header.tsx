import React from 'react';
import {Text, View} from 'tamagui';
import CustomDrawer from './CustomDrawer';

const Header = () => {
  return (
    <View
      height={60}
      justifyContent="center"
      alignItems="center"
      flexDirection="row">
      <CustomDrawer />
      <Text>Header</Text>
    </View>
  );
};

export default Header;
