import React from 'react';
import {View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import colors from '../misc/Colors';
import {useHeaderHeight} from '@react-navigation/elements';
import RoundButton from './RoundButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotes } from '../context/NoteProvider';

const NoteDetail = props => {
    const { note } = props.route.params;
    const headerHeight = useHeaderHeight();
    const { notes, updateNotes } = useNotes();

    const deleteNote = async () => {
        try {
            const newNotes = notes.filter(n => n.id !== note.id);
            await AsyncStorage.setItem('notes', JSON.stringify(newNotes));
            updateNotes(newNotes); // Update the notes state using the context
            props.navigation.goBack();
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    
    
    
    const formatDate = (ms) => {
        const date = new Date(ms);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hrs = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();

        return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`
    }

    const displayAlert = () => {
        Alert.alert('Are you sure?', 
        'This will delete the note from your list. This cannot be reversed.', [
            {
                text: 'Delete',
                onPress: deleteNote
            },
            {
                text: 'Cancel',
                onPress: () => console.log('cancel')
            }
        ], {
            cancelable: true
        })
    }
    return (
        <ScrollView contentContainerStyle = {[styles.container, {paddingTop: headerHeight}]}>
            <Text style = {styles.time}>{`Created at ${formatDate(note.time)}`}</Text>
            <Text style = {styles.title}>{note.title}</Text>
            <Text style = {styles.desc}>{note.desc}</Text>

            <View style = {styles.buttonContainer}>
                <RoundButton 
                iconDesignName = 'trash'
                style = {{backgroundColor: colors.ERROR, marginBottom: 15,}}
                onPress = {displayAlert} /> 
                <RoundButton iconDesignName = 'pencil' /> 
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 30,
        color: colors.PRIMARY,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 20,
        opacity: 0.6,
    },
    time: {
        textAlign: 'right',
        fontSize: 12,
        opacity: 0.5,
    },
    buttonContainer: {
        position: 'absolute',
        right: 15,
        bottom: 50,
    }
})

export default NoteDetail;