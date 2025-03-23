import {SafeAreaProvider} from 'react-native-safe-area-context';
const SafeAreaViewProvider = ({children}: any) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default SafeAreaViewProvider;
