// SearchScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import colors from '../misc/Colors';
import SearchBar from '../components/SearchBar';
import { useHeaderHeight } from '@react-navigation/elements';
import { useNotes } from '../context/NoteProvider';
import Note from '../components/Note';

const SearchScreen = ({ navigation }) => {
    const headerHeight = useHeaderHeight();
    const { notes } = useNotes();
    const [searchedNotes, setSearchedNotes] = useState([]); // State to hold the filtered notes based on search

    const openNote = note => {
        navigation.navigate('NoteDetail', { note });
    };

    const searchNotes = query => {
        const filtered = notes.filter(note => {
            if (!query || query.trim() === "") {
                return false; // Return false if query is empty or whitespace
            }
            const titleMatch = note.title.toLowerCase().includes(query.toLowerCase());
            const descMatch = note.desc.toLowerCase().includes(query.toLowerCase());
            return titleMatch || descMatch; // Return true if either title or desc matches the query
        });
        setSearchedNotes(filtered);
    };
    

    return (
        <View style={[styles.container, { paddingTop: headerHeight }]}>
            <SearchBar onSearch={searchNotes} />
            <FlatList 
                data={searchedNotes} 
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <Note onPress={() => openNote(item)} item={item} />}
            />
        </View>  
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: colors.LIGHT,
    },
});

export default SearchScreen;
