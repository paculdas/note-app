import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Name from './app/pages/Name';
import NoteList from './app/pages/NoteList';
import NoteDetail from './app/components/NoteDetail';
import NoteProvider from './app/context/NoteProvider';
import SearchScreen from './app/pages/SearchScreen';

export default function App() {
  const stack = createNativeStackNavigator();
  
  const [user, setUser] = React.useState({});

  const findUser = async () => {
    try {
      const result = await AsyncStorage.getItem('user');
      setUser(JSON.parse(result));
    } catch (error) {
      console.error('Error retrieving user from AsyncStorage:', error);
    }
  }

  React.useEffect(() => {
    findUser();
  }, []);

  if (!user) return <Name onFinish={findUser} />;
  
  return (
    <NavigationContainer>
      <NoteProvider>
        <stack.Navigator screenOptions={{ headerTitle: '', headerTransparent: true }}>
          <stack.Screen name="NoteList">
            {props => <NoteList {...props} user={user} />}
          </stack.Screen>
          <stack.Screen name="NoteDetail" component={NoteDetail} />
          <stack.Screen name="SearchScreen">
            {props => <SearchScreen {...props} user={user} />}
          </stack.Screen>
        </stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
}
