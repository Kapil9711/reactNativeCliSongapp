import {createTamagui, TamaguiProvider, View} from 'tamagui';
import {defaultConfig} from '@tamagui/config/v4'; // for quick config install this

const config = createTamagui(defaultConfig);

const TamaguiProviderContext = ({children}: any) => {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>;
};

export default TamaguiProviderContext;
