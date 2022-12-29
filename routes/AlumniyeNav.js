import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Pressable, Image, Dimensions, Text } from 'react-native';
import { Searchbar, Avatar, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Page
import Home from "../page/Home";
import Login from "../page/Login";
import Tracer from "../page/Tracer";
import LupaPass from "../page/LupaPass";
import Search from "../page/Search";
import Forum from "../page/Forum";
import TambahForum from "../page/TambahForum";
import Chat from "../page/Chat";
import Message from "../page/Message";
import Notification from "../page/Notification";
import Profile from "../page/Profile";
import Alumni from "../page/Alumni";

const StackNav = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = ({ navigation }) => {
    const screenHeight = Dimensions.get('window').height;
    const screenWidth = Dimensions.get('window').width;
    const searchbarWidth = Dimensions.get('window').width * 0.8;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Beranda') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Forum') {
                        iconName = focused ? 'people-circle' : 'people-circle-outline';
                    } else if (route.name === 'Message') {
                        iconName = focused ? 'mail' : 'mail-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerTitle: () => {
                    if (route.name === 'Beranda') {
                        return (
                            <View className="flex flex-row justify-center">
                                <View className="basis-3/4">
                                    <Image source={require('../assets/img/HeaderLogo.png')} />
                                </View>
                                <View className="basis-1/4">
                                    <View className="flex flex-row">
                                        <View className="basis-1/2">
                                            <Pressable className="mt-3 ml-3" onPress={() => navigation.navigate("Search")}>
                                                <Ionicons size={30} name={"search-outline"} color='white' />
                                            </Pressable>
                                        </View>
                                        <View className="basis-1/2">
                                            <Pressable className="mt-3 ml-2" onPress={() => navigation.navigate("Notification")}>
                                                <Ionicons size={30} name={"notifications-outline"} color='white' />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    } else if (route.name === 'Forum') {
                        return (
                            <View className="flex flex-row content-start">
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Ionicons className="mt-3" name={'arrow-back-outline'} size={30} color={'white'} />
                                </Pressable>
                                <View>
                                    <Searchbar className="rounded-full h-8 ml-2 text-sm" style={{ width: searchbarWidth }} placeholder='Cari Forum' />
                                </View>
                            </View>
                        )
                    } else if (route.name === 'Message') {
                        return (
                            <View className="flex flex-row content-start">
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Ionicons className="mt-3" name={'arrow-back-outline'} size={30} color={'white'} />
                                </Pressable>
                                <View>
                                    <Text className="text-lg font-bold text-white ml-4"> Message</Text>
                                </View>
                            </View>
                        )
                    } else if (route.name === 'Profile') {
                        return (
                            <View className="flex flex-row content-start">
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Ionicons className="mt-3" name={'arrow-back-outline'} size={30} color={'white'} />
                                </Pressable>
                                <View>
                                    <Text className="text-lg font-bold text-white ml-4"> Profil Saya</Text>
                                </View>
                            </View>
                        )
                    } else if (route.name === 'Notification') {
                        return (
                            <View className="flex flex-row content-start">
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Ionicons className="mt-3" name={'arrow-back-outline'} size={30} color={'white'} />
                                </Pressable>
                                <View>
                                    <Text className="text-lg font-bold text-white ml-4">Notification</Text>
                                </View>
                            </View>
                        )
                    } else if (route.name === 'TambahForum') {
                        return (
                            <View className="flex flex-row content-start">
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Ionicons className="mt-3" name={'arrow-back-outline'} size={30} color={'white'} />
                                </Pressable>
                                <View>
                                    <Text className="text-lg font-bold text-white ml-4">Tambah Forum</Text>
                                </View>
                                <View>
                                    <Button buttonColor='#207423' mode="contained" onPress={() => console.log('Pressed')}>
                                        Post
                                    </Button>
                                </View>
                            </View>
                        )
                    }
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#207423',
                },
                headerStyle: {
                    backgroundColor: '#207423',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                tabBarIconStyle: {
                    marginTop: 5,
                    marginBottom: 5,
                },
            })
            }
        >
            <Tab.Screen name="Beranda" component={Home} options={{ headerShown: true }} />
            <Tab.Screen name="Forum" component={Forum} options={{ headerShown: true }} />
            <Tab.Screen name="Message" component={Message} options={{ headerShown: true }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
            <StackNav.Screen
                name='Notification'
                component={Notification}
                options={{
                    headerShown: true,
                    tabBarButton: (props) => null,
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        backgroundColor: '#207423',
                    },
                    headerStyle: {
                        backgroundColor: '#207423',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIconStyle: {
                        marginTop: 5,
                        marginBottom: 5,
                    },
                }}
            />
            <StackNav.Screen
                name='Search'
                component={Search}
                options={{
                    headerTitle: () => {
                        return (
                            <View className="flex flex-row content-start">
                                <Pressable>
                                    <Ionicons className="mt-3" name={'arrow-back-outline'} size={30} color={'white'} />
                                </Pressable>
                                <View>
                                    <Searchbar className="rounded-full w-80 h-8 ml-2 text-sm" style={{ width: searchbarWidth }} placeholder='Pencarian' />
                                </View>
                            </View>
                        );
                    },
                    headerShown: true,
                    tabBarButton: (props) => null,
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        backgroundColor: '#207423',
                    },
                    headerStyle: {
                        backgroundColor: '#207423',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIconStyle: {
                        marginTop: 5,
                        marginBottom: 5,
                    },
                }}
            />

            <StackNav.Screen
                name='TambahForum'
                component={TambahForum}
                options={{
                    headerTitle: () => {
                        return (
                            <View className="flex flex-row justify-center mx-auto my-1">
                                <Pressable onPress={() => navigation.goBack()}>
                                    <Ionicons className="mt-3" name={'arrow-back-outline'} size={30} color={'white'} />
                                </Pressable>
                                <View >
                                    <Text className="text-lg font-bold text-white ml-4">Tambah Forum</Text>
                                </View>
                                <View className="ml-[100]" >
                                    <Button buttonColor='#FFFFFF' textColor='#207423' mode="contained" onPress={() => console.log('Pressed')}>
                                        Post
                                    </Button>
                                </View>
                            </View>
                        );
                    },
                    headerShown: true,
                    tabBarButton: (props) => null,
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: {
                        backgroundColor: '#207423',
                    },
                    headerStyle: {
                        backgroundColor: '#207423',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    tabBarIconStyle: {
                        marginTop: 5,
                        marginBottom: 5,
                    },
                }}
            />

        </Tab.Navigator>
    )
}

const AlumniyeNav = ({ route }) => {
    return (
        // Di setiap project, navigation container hanya boleh ada 1
        <NavigationContainer>

            {/* port http//0.0.0.0:8000/tracer */}
            {/* port http//0.0.0.0:8000/Home/Beranda */}
            {/* port http//0.0.0.0:8000/Home/TracerBottom */}
            <StackNav.Navigator initialRouteName='Login'>
                <StackNav.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />

                <StackNav.Screen
                    name="Home"
                    component={HomePage}
                    options={{ headerShown: false }}
                />

                <StackNav.Screen
                    name="Forum"
                    component={Forum}
                    options={{ headerShown: false }}
                />

                <StackNav.Screen
                    name="Message"
                    component={Message}
                    options={{ headerShown: true }}
                />

                <StackNav.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: true }}
                />




            </StackNav.Navigator>

        </NavigationContainer>
    )
}

export default AlumniyeNav;