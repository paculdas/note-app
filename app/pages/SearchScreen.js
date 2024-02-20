import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../misc/Colors';
import SearchBar from '../components/SearchBar';
import { useHeaderHeight } from '@react-navigation/elements';

const SearchScreen = () => {
  const headerHeight = useHeaderHeight();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingTop: headerHeight }]}>
        <SearchBar />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.LIGHT
  },
});

export default SearchScreen;