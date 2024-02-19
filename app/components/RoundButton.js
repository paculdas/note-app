import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../misc/Colors.js';
import { Entypo } from '@expo/vector-icons';

export default function RoundButton({ iconDesignName, size, color, onPress}) {
    return (
        <Entypo 
            name={iconDesignName}
            size={size || 24}
            color={color || colors.LIGHT}
            style={styles.icon}
            onPress={onPress}
        />
    );
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.PRIMARY,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50,
        elevation: 5,
    },
});

