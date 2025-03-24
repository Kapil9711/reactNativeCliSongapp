import React from 'react';
import {Input, Text, View, XStack} from 'tamagui';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

const Header = () => {
  return (
    <View height={60}>
      <XStack justifyContent="flex-start" alignItems="center">
        <CustomDrawer />
        <SearchInput />
        <View
          marginRight={10}
          marginLeft={20}
          padding={12}
          backgroundColor={'white'}
          borderRadius={100}>
          <Icon name="bell-o" size={20} />
        </View>
      </XStack>
    </View>
  );
};

export const SearchInput = ({setSearchQuery, searchQuery}: any) => {
  const dispatch = useDispatch();
  return (
    <Input
      value={searchQuery}
      onChangeText={v => dispatch(setSearchQuery(v))}
      placeholder="Search..."
      width={'60%'}
    />
  );
};

export default Header;
