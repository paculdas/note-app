import { StyleSheet, View } from 'react-native'
import React, { createContext } from 'react'
import colors from '../misc/Colors'

const NoteContext = createContext()
const NoteProvider = ({ children }) => {
    return (
        <NoteContext.Provider>
            {children}
        </NoteContext.Provider>
    )
}

const styles = StyleSheet.create({
    container:{},
})

export default NoteProvider;