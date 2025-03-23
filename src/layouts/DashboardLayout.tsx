import React from 'react';
import {Text, View} from 'tamagui';
import Header from '../container/dashboard/common/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const DashboardLayout = ({children}: any) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      {children}
    </SafeAreaView>
  );
};

export default DashboardLayout;
