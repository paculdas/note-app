import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import colors from '../misc/Colors.js';
import { StatusBar } from 'expo-status-bar';
import RoundButton from '../components/RoundButton.js';
import SearchBar from '../components/SearchBar.js';
import Note from '../components/Note';
import NoteInputModal from '../components/Notepad.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../context/NoteProvider.js';
import SearchScreen from './SearchScreen.js';

const NoteList = ({ user, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const{ notes, setNotes } = useNotes();

    const submitData = async (title, desc) => {
        const note = {id: Date.now(), title, desc, time: Date.now() };
        const updatedNotes = [...notes, note];
        setNotes(updatedNotes);
        await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    const openNote = note => {
        navigation.navigate('NoteDetail', { note, updateNotes: setNotes });
    };

    const openSearchScreen = () => {
        navigation.navigate('SearchScreen', { notes: notes });
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
            <View style = {styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.userHeader}>{`Hello, ${user.name}`}</Text>
                </View>
                <View style={styles.headerRight}>
                    {notes.length ? (
                        <RoundButton
                            iconDesignName="magnifying-glass"
                            style ={styles.searchButton}
                            onPress = {openSearchScreen}
                        />
                    ): null}
                        <RoundButton 
                            iconDesignName='squared-plus' 
                            style = {styles.addButton}
                            onPress = {() => setModalVisible(true)}
                        />
                </View>
            </View>
            <FlatList 
                data = {notes} 
                keyExtractor= {item => item.id.toString()}
                renderItem = {({item}) => <Note onPress = {() => openNote(item)} item = {item} />}
            />
            {!notes.length ? (           
                <View style = {[StyleSheet.absoluteFillObject, styles.emptyHeadingContainer]}>
                    <Text style = {styles.emptyHeader}>Add Notes</Text>
                </View>
            ) : null}
            <NoteInputModal 
            visible = {modalVisible} 
            onClose = {() => setModalVisible(false)} 
            onSubmit={submitData}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'column',
        height: 230,
    },
    headerLeft: {
        flex: 1,
        top: 40,
    },
    headerRight: {
        flex: 0,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingVertical: 15,
    },
    userHeader: {
        color: colors.PRIMARY,
        fontSize: 43,
        fontWeight: 'bold',
        paddingLeft: 0, 
        paddingTop: 30, 
    },
    emptyHeader: {
        color: colors.PRIMARY,
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        opacity: 0.5,
    },
    emptyHeadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1
    },
});

export default NoteList;
