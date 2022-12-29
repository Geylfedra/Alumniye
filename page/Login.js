import React, { useState, useEffect } from 'react';
import { Text, ImageBackground, Image, SafeAreaView, Dimensions, TextInput, View, Pressable, Modal, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const screenHeight = Dimensions.get('window').height;
    const VectorHeight = Dimensions.get('window').height * 0.48;
    const [iconName, setIconName] = useState('');
    const [iconColor, setIconColor] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [lookPass, setLookPass] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handleSubmit = () => {
        setModalVisible(true);
        if (email === '' && password === '') {
            setIconName('alert-circle-outline');
            setIconColor('#ffa400');
            setAlertMessage('Silahkan isi nim dan password');
        }
        else if (email === '') {
            setIconName('alert-circle-outline');
            setIconColor('#ffa400');
            setAlertMessage('Silahkan isi nim');
        }
        else if (password === '') {
            setIconName('alert-circle-outline');
            setIconColor('#ffa400');
            setAlertMessage('Silahkan isi password');
        }
        else {
            let dataToSend = { email: email, password: password };
            let formBody = [];
            for (let key in dataToSend) {
                let encodedKey = encodeURIComponent(key);
                let encodedValue = encodeURIComponent(dataToSend[key]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
            formBody = formBody.join('&');
            fetch('http://192.168.100.11:8000/api/login', {
                method: 'POST',
                body: formBody,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            }).then((response) => response.json()).then((responseJson) => {
                if (responseJson.status === 'success') {
                    setIconName('checkmark-circle-outline');
                    setIconColor('#006633');
                    setAlertMessage('Login Berhasil');
                    AsyncStorage.setItem('token', JSON.stringify(responseJson.authorization.token));
                    AsyncStorage.setItem('id', JSON.stringify(responseJson.user.id));
                    navigation.navigate('Home');
                } else {
                    setIconName('alert-circle-outline');
                    setIconColor('#ffa400');
                    setAlertMessage('Login Gagal');
                }
            }).catch((error) => {
                console.error(error.message);
            }
            );

        }
    };

    return (
        <>
            <SafeAreaView className="bg-white" style={{ height: screenHeight }}>

                {/* Modal Alert */}
                <Modal animationType="slide" transparent={true} visible={modalVisible} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View className="text-center" style={styles.modalStyle}>
                        <Ionicons name={iconName} size={100} color={iconColor} style={{ alignSelf: 'center' }} />
                        <Text className="font-bold text-lg text-green-900 text-center">{alertMessage}</Text>
                        <Pressable className="rounded-full w-1/2 mx-auto py-2 my-2" style={{ backgroundColor: "#006633" }} onPress={() => setModalVisible(!modalVisible)}>
                            <Text className="text-white text-center font-bold text-lg">OK</Text>
                        </Pressable>
                    </View>
                </Modal>
                {/* <AlertComponent modalVisible={modalVisible} iconName={iconName} iconColor={iconColor} alertMessage={alertMessage}/> */}

                <View className="flex flex-row justify-center mx-auto mt-20">
                    <Image source={require("../assets/img/Intro.png")} />
                </View>

                {/* Tampilan screen */}
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View className="mx-1">
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                <Text className="text-lg ml-5">Email</Text>
                                <TextInput
                                    className=" ml-2"
                                    style={{ height: 43, borderColor: '#006633', borderWidth: 1, margin: 10, borderRadius: 10, padding: 10 }}
                                    onChangeText={text => setEmail(text)}
                                    value={email}
                                    placeholder={"Masukkan Email"}
                                />
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                <Text className="text-lg ml-5">Password</Text>
                                <View className="flex flex-row" style={{ borderColor: '#006633', borderWidth: 1, margin: 10, borderRadius: 10, }}>
                                    <View className="basis-3/4">
                                        <TextInput
                                            className="ml-2"
                                            style={{ height: 43 }}
                                            onChangeText={text => setPassword(text)}
                                            secureTextEntry={lookPass}
                                            value={password}
                                            placeholder={"Masukkan Password"}
                                        />
                                    </View>
                                    <View className="basis-1/4">
                                        <Pressable className="mt-2 ml-6" onPress={() => setLookPass(!lookPass)}>
                                            <Ionicons name={!lookPass ? "eye-off" : "eye"} size={25} color="#006633" style={{ alignSelf: 'center', marginRight: 10 }} />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <View className="text-center mt-10 bg-white">
                            <Pressable className="rounded-full w-1/2 mx-auto px-2 py-2" style={{ backgroundColor: "#006633" }} onPress={() => navigation.navigate('Home')}>
                                <Text className="text-white text-center font-bold text-lg">Login</Text>
                            </Pressable>
                            <Pressable className="my-2">
                                <Text className="text-center text-green-900 font-bold text-lg my-1">Lupa Password?</Text>
                            </Pressable>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    modalStyle: {
        marginTop: 250,
        marginHorizontal: 50,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
});

export default Login;