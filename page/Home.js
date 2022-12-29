import * as React from 'react';
import BannerCustom from '../components/Home/BannerCustom';
import BannerTracer from '../components/Home/BannerTracer.js';
import IsiForum from '../components/Forum/IsiForum';
import { StyleSheet, View, Image, Text, Pressable, ScrollView, SafeAreaView } from "react-native";

const Home = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <SafeAreaView>
                    <Text className="mt-3 ml-5" style={{ fontFamily: "Roboto", fontSize: 32 }}>What's New</Text>
                    <BannerCustom />
                    <Text className="mt-3 ml-5" style={{ fontFamily: 'Roboto', fontSize: 32 }}>Activity</Text>
                    <BannerTracer />
                    <Text className="mt-3 ml-5" style={{ fontFamily: 'Roboto', fontSize: 32 }}>Forum Terbaru</Text>
                    <IsiForum />
                    <IsiForum />
                    <IsiForum />
                    <IsiForum />
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

export default Home;