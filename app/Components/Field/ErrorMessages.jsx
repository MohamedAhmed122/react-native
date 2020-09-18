import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppText from '../AppText'
import { danger } from '../../config/Color';

export default function ErrorMessages({error}) {
    if(!error) return null;
    return (
        <AppText style={styles.error}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    error:{
        color: danger,
       fontSize:15,
       marginLeft: 12
    }
})
