import { View, Text } from 'react-native';
import React from 'react';

import { RootStackParamList } from './IntialyScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}
const Home = ({ navigation }: HomeScreenProps) => {
  return (
    <View>
      <SafeAreaView>
        <Text
          style={{
            borderRadius: 20,
            borderWidth: 2,
            borderColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Setting');
          }}
        >
          Home
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Home;
