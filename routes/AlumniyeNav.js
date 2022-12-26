// Component
import * as React from 'react';
import Ionicons from 'react-native-vector-icons';
import { View, Pressable } from 'react-native';
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

const StackNav = createNativeStackNavigator();
const Tab = createNativeStackNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Chat') {
                        iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerTitle: () => {
                    if (route.name === 'Home') {
                        return (
                            <View className="flex flex-row justify-center">
                                <View className="basis-1/4">
                                    <Avatar.Image className="ml-8" size={42} source={{ uri: 'https://media.istockphoto.com/id/1399788030/id/foto/potret-wanita-muda-india-yang-percaya-diri-berpose-di-latar-belakang.jpg?s=612x612&w=is&k=20&c=VqBF7e_SQvi7cULkFM2sSNugpsKiIalqO9refsB4TvI=' }} />
                                </View>
                            </View>
                        );
                    } else if (route.name === 'Chat') {
                        return <Avatar.Image size={46} source={{ uri: 'https://media.istockphoto.com/id/1399788030/id/foto/potret-wanita-muda-india-yang-percaya-diri-berpose-di-latar-belakang.jpg?s=612x612&w=is&k=20&c=VqBF7e_SQvi7cULkFM2sSNugpsKiIalqO9refsB4TvI=' }}
                        />
                    }
                },
                tabBarActiveTintColor: '#ffa400',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#006633',
                },
                headerStyle: {
                    backgroundColor: '#006633',
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
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Chat" component={Chat} />

            <StackNav.Screen
                name="Forum"
                component={Forum}
                options={({ navigation }) => ({
                    tabBarButton: (props) => null,
                    headerTitle: () => {
                        return (
                            <Pressable className="px-1 pt-1 rounded-full"
                                title="Semua" style={{ backgroundColor: '#207423' }} onPress={() => navigation.goBack()}>
                                <Ionicons name="arrow-back" size={30}
                                    color="#FFFFFF">
                                </Ionicons>
                            </Pressable>
                        );
                    },
                    headerBackVisible: false,
                })}
            />
        </Tab.Navigator>
    )

}
const AlumniyeNav = () => {
    return (
        <NavigationContainer>
            <StackNav.Navigator
                initialRouteName='Home'
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: '#207423',
                    },
                    headerShown: () => {
                        if (navigation.name === 'Forum') {
                            return true;
                        }
                        else if (navigation.name === 'Event')
                            return true;
                    }
                })

                }

            />

        </NavigationContainer>
    )
}