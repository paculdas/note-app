import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import colors from '../misc/Colors.js';
import RoundButton from '../components/RoundButton.js';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage from @react-native-async-storage/async-storage

const Name = ({ onFinish }) => {
    const [name, setName] = useState('');

    const submitData = async () => {
        const user = { name: name}; 
        await AsyncStorage.setItem('user', JSON.stringify(user));
        console.log('Username saved successfully:', user);
        if (onFinish) onFinish();
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Please enter your name</Text>
            <TextInput 
                placeholder='Type here...' 
                style={styles.inputBox}
                value={name}
                onChangeText={text => setName(text)}
            />
            <StatusBar hidden={true} />
            {name.trim().length > 3 && (
                <RoundButton 
                    iconDesignName="arrow-with-circle-right" 
                    onPress={submitData}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        color: colors.PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        width: 300,
        marginTop: 5,
        marginBottom: 15,
        padding: 5,
        paddingLeft: 10,
        borderRadius: 5,
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 43,
        fontWeight: 'bold'
    }
});

export default Name;