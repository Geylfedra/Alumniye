import * as React from 'react';
import BannerCustom from '../components/Home/BannerCustom';
import BannerTracer from '../components/Home/BannerTracer.js';
import { StyleSheet, View, Image, Text, Pressable, ScrollView, SafeAreaView } from "react-native";

const Home = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <SafeAreaView>
                    <Text className="mt-5 ml-5" style={{ fontFamily: 'Roboto', fontSize: 32 }}>What's New</Text>
                    <BannerCustom />
                    <Text className="mt-5 ml-5" style={{ fontFamily: 'Roboto', fontSize: 32 }}>Activity</Text>
                    <BannerTracer />
                </SafeAreaView>
            </ScrollView>
        </>
    );
}

export default Home;