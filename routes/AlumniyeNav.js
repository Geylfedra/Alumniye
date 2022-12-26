import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
const Tab = createBottomTabNavigator();

const HomePage = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Beranda') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000000',
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
            <Tab.Screen name="Beranda" component={Home} options={{ headerShown: true }} />
            <Tab.Screen name="Search" component={Search} options={{ headerShown: false }} />
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