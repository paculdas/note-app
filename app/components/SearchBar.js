// SearchBar.js
import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import colors from '../misc/Colors';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (text) => {
        setQuery(text); // Update query state with the current value
        onSearch(text); // Call onSearch with the current search query
    };

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.searchBar} 
                placeholder='Search here...' 
                onChangeText={handleSearch}
                value={query}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0,
        paddingVertical: 10,
    },
    searchBar: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        color: colors.PRIMARY,
        height: 40,
        borderRadius: 40,
        paddingLeft: 15,
        fontSize: 20,
    }
});

export default SearchBar;
