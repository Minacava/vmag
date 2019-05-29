import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Video from 'react-native-video';
import { Header } from 'react-native-elements';

import Footer from '../components/footer';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Video
                    ref={(ref) => {
                        this.player = ref
                    }}
                    source={require("../assets/videos/sail.mp4")}                                   // Store reference
                    repeat={true}
                    muted={true}
                    style={styles.backgroundVideo}
                    resizeMode={"cover"}
                    ignoreSilentSwitch={"obey"}
                />
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff'
                    }}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        justifyContent: 'space-around',
                    }}
                    centerComponent={{ text: '', style: { color: 'blue' } }}
                    rightComponent={{
                        icon: 'search',
                        color: '#fff'
                    }}
                />
                <Text h1>Heading 1</Text>
                <Footer />
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
        right: 0,
    },
    backgrounColor: {
        backgroundColor: 'white'
    }
});