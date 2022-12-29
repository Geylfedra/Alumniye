import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';

const Profile = () => {
    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: 'white', height: 200 }}>
                    <View className="flex flex-row">
                        <Pressable>
                            <TouchableOpacity>
                                <Image
                                    className="mt-5 ml-5"
                                    style={{
                                        height: 120,
                                        width: 120,
                                        borderRadius: 100,
                                    }}
                                    source={require('../assets/img/profil.jpg')} >
                                </Image>
                            </TouchableOpacity>
                        </Pressable>
                        <View className="mt-9 ml-3">
                            <Text className="font-semibold" style={{
                                fontSize: 15,
                            }}>
                                Geylfedra Matthew Panggabean
                            </Text>
                            <Text>

                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

export default Profile;