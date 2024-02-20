import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import colors from '../misc/Colors';

const Note = ( {item} ) => {
    const {title, desc} = item;

    return (
        <View style = {styles.container}>
            <Text 
            style = {styles.title} 
            numberOfLines={2}>{title}</Text>
            <Text 
            style = {styles.desc} 
            numberOfLines={3}>{desc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.PRIMARY,
        borderRadius: 15,
        marginTop: 15,
        padding: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.LIGHT,
    },
})

export default Note;