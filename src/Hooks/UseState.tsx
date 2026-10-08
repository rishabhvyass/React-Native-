import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const UseState = () => {
  const [count, setCount] = useState<number>(0);
  const [isDev, setIsDev] = useState<boolean>(true);

  return (
    <View>
      <Text
        style={styles.container}
        onPress={() => {
          setCount(prev => prev + 1);
        }}
      >
        count {count}
      </Text>
      <Text>the coder is dev {isDev ? 'true' : 'false'}</Text>
      <TextInput
        style={{ borderWidth: 3, minWidth: 200, padding: 8 }}
        placeholder="DEV COMFERMATION"
        onChangeText={text => setIsDev(text.trim().toLowerCase() === 'i am a dev')}
      />
     
    </View>
  );
};

export default UseState;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    textAlign: 'center',
    padding: 10,
  },
});
