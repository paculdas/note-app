import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Name from './app/pages/Name';
import NoteList from './app/pages/NoteList';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from @react-native-async-storage/async-storage
import SearchBar from './app/components/SearchBar';

export default function App() {
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

  if (!user) return <Name onFinish = {findUser} />
  return <NoteList user = {user}/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});