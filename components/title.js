import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Title extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.title}>The 19 best places to visit in July</Text>
                    <Text style={styles.indicator}>View Article</Text>
                </View>
            </TouchableOpacity>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

    },
    title: {
        fontSize: 20,
        color: 'white'
    },
    indicator: {
    }


})
