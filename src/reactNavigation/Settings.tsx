import { View, Text } from 'react-native';
import React from 'react';
import { RootStackParamList } from './IntialyScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface SettingScreenProps{
  navigation:NativeStackNavigationProp<RootStackParamList, "Setting">
}
const Setting = ({navigation}:SettingScreenProps) => {
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;
