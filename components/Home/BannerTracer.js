import * as React from 'react';
import { View, Text, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const BannerTracer = () => {
    return (
        <Pressable>
            <TouchableOpacity onPress={() => console.log('Pressed')}>
                <View className="flex flex-row bg-white rounded-xl shadow-xl mt-2 mx-1" style={{ backgroundColor: '#207423', width: 350, height: 100 }}>
                    <View className="basis-1/4 container justify-center rounded-xl">
                        <Image className="rounded-xl ml-2 mt-2" source={require('../../assets/img/Tracer.png')} style={{ width: 100 }} />
                    </View>
                    <View className="basis-3/4 justify-center ml-10 rounded-xl ">
                        <Text className="text-lg font-bold text-white ">Trace Your Study !</Text>
                        <Text className="text-white" style={{ fontSize: 12 }} >Lengkapi data pasca lulus anda !</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Pressable>
    );
}
export default BannerTracer;