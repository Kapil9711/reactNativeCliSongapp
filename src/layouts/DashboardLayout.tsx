import React from 'react';
import {Text, View} from 'tamagui';
import Header from '../container/dashboard/common/Header';
import {SafeAreaView} from 'react-native-safe-area-context';

const DashboardLayout = ({children}: any) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black', paddingTop: 15}}>
      <View>
        <Header />
        {children}
      </View>
    </SafeAreaView>
  );
};

export default DashboardLayout;
