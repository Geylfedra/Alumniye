import * as React from 'react';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IsiForum from '../components/Forum/IsiForum';

const Forum = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <View>
                    <IsiForum />
                    <IsiForum />
                    <IsiForum />
                    <IsiForum />
                    <IsiForum />
                </View>
            </ScrollView>
            <FloatingAction color='#207423' onPressMain={() => navigation.navigate("TambahForum")} showBackground={false} />
        </>
    );
}

const styles = StyleSheet.create({
    tombolTambahForum: {
        backgroundColor: '#207423',
        flex: 1,
        position: 'absolute',

    }
});
export default Forum;