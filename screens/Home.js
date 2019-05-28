
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bigBlue}>
                    HOME
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
});