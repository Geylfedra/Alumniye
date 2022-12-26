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
                        if (navigation.name === '') {

                        }
                    }
                })

                }

            />

        </NavigationContainer>
    )
}