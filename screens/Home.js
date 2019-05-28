import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

import Header from '../components/header/index';


export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Video
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    source={require("../assets/videos/Superb_sunset.mp4")}                                   // Store reference
                    repeat={true}
                    muted={true}
                    style={styles.backgroundVideo}
                    resizeMode={"cover"}
                    ignoreSilentSwitch={"obey"}
                />
            </View>
        )
    }
}
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundVideo: {
        height: height,
        position: "absolute",
        top: 0,
        left: 0,
        alignItems: "stretch",
        bottom: 0,
        right: 0
    }
});