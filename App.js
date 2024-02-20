import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from @react-native-async-storage/async-storage

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Name from './app/pages/Name';
import Note from './app/components/Note';
import NoteList from './app/pages/NoteList';
import NoteDetail from './app/components/NoteDetail';
import NoteProvider from './app/context/NoteProvider';

export default function App() {
  const stack = createNativeStackNavigator();
  
  const [user, setUser] = useState({});

  const findUser = async () => {
    try {
      const result = await AsyncStorage.getItem('user');
      setUser(JSON.parse(result));
      console.log(result);
    } catch (error) {
      console.error('Error retrieving user from AsyncStorage:', error);
    }
  }

  useEffect(() => {
    findUser()
    // AsyncStorage.clear();
  }, []);

  const RenderNoteList = (props) => <NoteList {...props} user = {user} />

  if (!user) return <Name onFinish = {findUser} />
  return (
    <NavigationContainer>
      <NoteProvider>

        <stack.Navigator screenOptions ={{ headerTitle: '', headerTransparent: true}}>
          <stack.Screen component = {RenderNoteList} name = "NoteList"/>
          <stack.Screen component = {NoteDetail} name = "NoteDetail"/>
        </stack.Navigator>

      </NoteProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});