import { StyleSheet, View, Text, TextInput } from 'react-native'
import React from 'react'
import colors from '../misc/Colors'

const SearchBar = () => {
    return (
        <View style = {styles.container}>
            <TextInput style = {styles.searchBar} placeholder='Search here...' />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
    },
    searchBar: {
        borderWidth: 0.5,
        borderColor: colors.PRIMARY,
        height: 40,
        borderRadius: 40,
        paddingLeft: 15,
        fontSize: 20,
    }
})

export default SearchBar;