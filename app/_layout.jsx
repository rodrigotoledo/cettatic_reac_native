import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import "../global.css";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderLeftWithTitle from '../components/HeaderLeftWithTitle';

export default function Layout() {

  return (
    <Stack initialRouteName='(free)' >
      <Stack.Screen name="(free)" options={{headerShown: false}} />
      <Stack.Screen name="(authenticated)" options={{headerShown: false}}/>
      <Stack.Screen name="patient_info/index"
        options={{
          title: null,
          presentation: 'fullScreenModal',
          headerLeft: () => (
            <View className="flex flex-row items-center mr-2">
              <TouchableOpacity className='flex flex-row items-center bg-primary rounded-md px-2 mr-1'>
                <MaterialCommunityIcons name="account-arrow-left" size={30} color="white" className='border border-white rounded-full m-1' />
                <Text className='text-white text-lg'>Voltar</Text>
              </TouchableOpacity>

              <HeaderLeftWithTitle />
            </View>
          ),
        }}
      />
    </Stack>
  );
}
