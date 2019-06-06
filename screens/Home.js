import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Video from 'react-native-video';
import { Header } from 'react-native-elements';

import Footer from '../components/footer';
import HomeSeparator from '../components/dividers/home-separator';
import Title from '../components/title';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Video
                    ref={(ref) => {
                        this.player = ref
                    }}
                    source={require("../assets/videos/Superb_sunset.mp4")}                                   // Store reference
                    repeat={true}
                    muted={true}
                    style={styles.backgroundVideo}
                    resizeMode={"cover"}
                    ignoreSilentSwitch={"obey"}
                />
                <Header
                    leftComponent={{
                        icon: 'menu',
                        color: '#fff',
                        marginLeft: 10,
                        size: 40,

                    }}
                    containerStyle={{
                        backgroundColor: 'transparent',
                        justifyContent: 'space-around',
                        borderBottomColor: 'transparent',
                    }}
                    centerComponent={{
                        text: '',
                        style: {
                            color: 'blue'
                        }
                    }}
                    rightComponent={{
                        icon: 'search',
                        color: '#fff',
                        marginRight: 10,
                        size: 40,
                    }}
                />
                <View style={styles.titleContanier}>
                    <Text style={styles.title} h1>WANDERLUST  </Text>
                    <Text style={styles.subTitle} h1>The first VERTICAL-MAG </Text>
                    <HomeSeparator />
                    <Text style={styles.date} h1>2019  Nº 001</Text>
                </View>
                <View style={styles.titleArticle} >
                    <Title />
                </View>
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
        opacity: 0.7,
    },
    titleContanier: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 45,
        color: 'white',
    },
    subTitle: {
        fontSize: 20,
        color: 'white'
    },
    date: {
        fontSize: 15,
        color: 'black',
        letterSpacing: 3,
    },
    titleArticle: {
        bottom: 160,
    }
});