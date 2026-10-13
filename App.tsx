import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Text } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <SafeAreaView />

      <Text>hi</Text>
      {/*<Products />*/}
    </SafeAreaProvider>
  );
};
export default App;
