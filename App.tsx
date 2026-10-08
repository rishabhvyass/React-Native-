import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'react-native';
import UseReducer from './src/Hooks/UseReducer';

const App = () => {
  return (
    <SafeAreaProvider
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <SafeAreaView />
      {/*<InitalScreen />*/}
      <Text>hi</Text>
      {/*<UseState/>*/}
      <UseReducer/>
    </SafeAreaProvider>
  );
};
export default App;
