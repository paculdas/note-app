import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import colors from '../misc/Colors.js';
import { StatusBar } from 'expo-status-bar';
import RoundButton from '../components/RoundButton.js';
import SearchBar from '../components/SearchBar.js';


const NoteList = ({ user }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' backgroundColor={colors.LIGHT} />
            <View style = {styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.userHeader}>{`Hello, ${user ? user.name : 'Anon'}`}</Text>
                </View>
                <View style={styles.headerRight}>
                    <RoundButton
                        iconDesignName="magnifying-glass"
                        style={styles.searchButton}
                    />
                    <RoundButton 
                        iconDesignName='squared-plus' 
                        style = {styles.addButton}
                        onPress = {() => console.log('opening modal')}
                    />
                </View>
            </View>
            <View style = {[StyleSheet.absoluteFillObject, styles.emptyHeadingContainer]}>
                <Text style = {styles.emptyHeader}>Add Notes</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        paddingHorizontal: 20,
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
        paddingRight: 0,
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
