import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Pressable, Image, Dimensions } from 'react-native';
import { Searchbar, Avatar } from 'react-native-paper';
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
import Chat from "../page/Chat";
import Message from "../page/Message";
import Notification from "../page/Notification";
import Profile from "../page/Profile";
import Alumni from "../page/Alumni";
import { color } from 'react-native-tailwindcss';

const StackNav = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = ({ navigasi }) => {
    const screenHeight = Dimensions.get('window').height;
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
                        iconName = focused ? 'person' : 'person-outline';
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
                                            <Pressable className="mt-3 ml-3">
                                                <Ionicons size={30} name={"search-outline"} color='white' />
                                            </Pressable>
                                        </View>
                                        <View className="basis-1/2">
                                            <Pressable className="mt-3 ml-2">
                                                <Ionicons size={30} name={"notifications-outline"} color='white' />
                                            </Pressable>
                                        </View>
                                    </View>
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
            })}
        >
            <Tab.Screen name="Beranda" component={Home} options={{ headerShown: true }} />
            <Tab.Screen name="Forum" component={Forum} options={{ headerShown: true }} />
            <Tab.Screen name="Message" component={Message} options={{ headerShown: true }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
        </Tab.Navigator>
    )
}

const AlumniyeNav = () => {
    return (
        // Di setiap project, navigation container hanya boleh ada 1
        <NavigationContainer>

            {/* port http//0.0.0.0:8000/tracer */}
            {/* port http//0.0.0.0:8000/Home/Beranda */}
            {/* port http//0.0.0.0:8000/Home/TracerBottom */}
            <StackNav.Navigator>
                <StackNav.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
                <StackNav.Screen name="Search" component={Search} options={{ headerShown: false }} />
            </StackNav.Navigator>

        </NavigationContainer>
    )
}

export default AlumniyeNav;