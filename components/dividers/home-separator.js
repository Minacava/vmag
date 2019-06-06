import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

export default class HomeSeparator extends Component {
    render() {
        return (
            <View style={styles.lineStyle} />
        )
    }
}
const styles = StyleSheet.create({
    lineStyle: {
        borderBottomWidth: 2,
        borderBottomColor: "#fafafa",
        alignItems: "center",
        marginVertical: 30,
        justifyContent: "center",
        width: '60%',
    }
})