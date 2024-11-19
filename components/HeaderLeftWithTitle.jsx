import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome  } from '@expo/vector-icons';

const HeaderLeftWithTitle = () => (
  <View className="flex flex-row items-center ml-2">
    <FontAwesome name="hospital-o" color={'#D301C5'} size={30} className="text-highlightAccent  mr-2" />
    <Text className='font-bold text-lg text-highlightAccent'>DoramanaClone</Text>
  </View>
);

export default HeaderLeftWithTitle;
