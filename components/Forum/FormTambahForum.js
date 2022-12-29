import { Text, View, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const searchbarWidth = Dimensions.get('window').width * 0.7;

const FormTambahForum = (props) => {
    const [judulForum, setJudulForum] = React.useState(null);
    const [isiForum, setIsiForum] = React.useState(null);

    return (
        <>

            <View className="flex flex-row justify-center mx-auto my-2">
                <TouchableOpacity className="basis-1/4">
                    <Image
                        className="ml-7"
                        style={{
                            height: 50,
                            width: 50,
                            borderRadius: 100,
                        }}
                        source={require('../../assets/img/profil.jpg')} >
                    </Image>
                </TouchableOpacity>
                <View className="basis-3/4">
                    <TextInput
                        className="my-1"
                        style={styles.input}
                        onChangeText={setJudulForum}
                        value={judulForum}
                        placeholder="Judul Forum"
                    />
                </View>
            </View>

            <View >
                <TextInput
                    multiline={true}
                    onChangeText={text => setIsiForum(text)}
                    value={isiForum}
                    style={{ padding: 10 }}
                    placeholder="Isi Forum"
                />
            </View>

        </>
    )

}

const styles = StyleSheet.create({
    input: {
        width: searchbarWidth,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 50
    },
});

export default FormTambahForum;