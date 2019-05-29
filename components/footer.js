import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => { alert('pressing footer') }}>
                    <Icon
                        name='chevron-down'
                        type='font-awesome'
                        color='#ffff'
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        position: 'absolute',
        left: 0,
        bottom: 10,
        right: 0,
    },
});