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
import ForumIsi from "../page/ForumIsi";
import Chat from "../page/Chat";
import Message from "../page/Message";
import Notification from "../page/Notification";
import Profile from "../page/Profile";
import Alumni from "../page/Alumni";

const StackNav = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Beranda = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                //  Konfigurasi screen dengan kondisi
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Beranda') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Chat') {
                        iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                headerTitle: () => {
                    if (route.name === 'Beranda') {
                        return (
                            <View className="flex flex-row justify-center">
                                <View className="basis-3/4">
                                    <Searchbar className="rounded-full h-10 ml-2 text-sm" placeholder='Cari Data Alumni' />
                                </View>
                                <View className="basis-1/4">
                                    <Avatar.Image className="ml-8" size={42} source={{ uri: 'https://picsum.photos/700' }} />
                                </View>
                            </View>
                        );
                    } else if (route.name === 'Chat') {
                        return <Avatar.Image size={46} source={{ uri: 'https://picsum.photos/700' }} />
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
            <Tab.Screen name="Beranda" component={Home} />
            <Tab.Screen name="Chat" component={Chat} />
        </Tab.Navigator>
    );
};

// Navigasi Utama Molus
const AlumniyeNav = () => {
    return (
        <>
            <NavigationContainer>
                <StackNav.Navigator
                    initialRouteName='Home'
                    screenOptions={({ navigation }) => ({
                        headerStyle: {
                            backgroundColor: '#006633',
                        },
                        headerTintColor: '#fff',
                        headerShown: () => {
                            if (navigation.name === 'Forum') {
                                return true;
                            }
                            else if (navigation.name === 'Search') {
                                return true;
                            }
                            else if (navigation.name === 'Tracer') {
                                return true;
                            }
                            else if (navigation.name === 'Profile') {
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                    })}
                >
                    {/* Auth Page */}
                    <StackNav.Screen
                        name="Login"
                        component={Login}
                        options={{
                            headerShown: false,
                        }}
                    />
                    {/* <StackNav.Screen name="Register" component={RegisterPage} /> */}
                    <StackNav.Screen
                        name="Home"
                        component={Beranda}
                        options={{
                            headerShown: false,
                        }}
                    />

                    {/* Navigasi Forum */}
                    <StackNav.Screen
                        name="Forum"
                        component={Forum}
                        options={({ navigation }) => ({
                            tabBarButton: (props) => null,
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,

                        })}
                    />
                    <StackNav.Screen
                        name="Alumni"
                        component={Alumni}
                        options={({ navigation }) => ({
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,
                        })}
                    />

                    <StackNav.Screen
                        name="Message"
                        component={Message}
                        options={({ navigation }) => ({
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,
                        })}
                    />

                    <StackNav.Screen
                        name='ForumIsi'
                        component={ForumIsi}
                        options={({ navigation }) => ({
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,
                        })}
                    />
                    {/* <StackNav.Screen name="ForumCreate" component={ForumCreatePage} />
                    <StackNav.Screen name="ForumEdit" component={ForumEditPage} />
                    <StackNav.Screen name="ForumDelete" component={ForumDeletePage} />
                    <StackNav.Screen name="ForumJoin" component={ForumJoinPage} />
                    <StackNav.Screen name="ForumLeave" component={ForumLeavePage} />
                    <StackNav.Screen name="ForumSearch" component={ForumSearchPage} /> */}

                    {/* Navigasi Event */}
                    <StackNav.Screen
                        name="Tracer"
                        component={Tracer}
                        options={({ navigation }) => ({
                            tabBarButton: (props) => null,
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,
                        })}
                    />


                    {/* <StackNav.Screen name="EventDetail" component={EventDetailPage} />
                    <StackNav.Screen name="EventCreate" component={EventCreatePage} />
                    <StackNav.Screen name="EventEdit" component={EventEditPage} />
                    <StackNav.Screen name="EventDelete" component={EventDeletePage} /> */}

                    {/* Navigasi Profile */}
                    {/* <StackNav.Screen name="Profile" component={ProfilePage} />
                    <StackNav.Screen name="ProfileEdit" component={ProfileEditPage} />
                    <StackNav.Screen name="ProfileDelete" component={ProfileDeletePage} /> */}

                    {/* Navigasi Posting */}
                    <StackNav.Screen
                        name="Search"
                        component={Search}
                        options={({ navigation }) => ({
                            tabBarButton: (props) => null,
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,
                        })}
                    />
                    <StackNav.Screen
                        name="LupaPass"
                        component={LupaPass}
                        options={({ navigation }) => ({
                            tabBarButton: (props) => null,
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,
                        })}
                    />
                    <StackNav.Screen
                        name="Profile"
                        component={Profile}
                        options={({ navigation }) => ({
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,
                        })}
                    />

                    {/* Screen Tracer Study */}
                    <StackNav.Screen
                        name="Notification"
                        component={Notification}
                        options={({ navigation }) => ({
                            tabBarButton: (props) => null,
                            headerTitle: () => {
                                return (
                                    <Pressable className="px-1 py-1 rounded-full" title="Semua" style={{ backgroundColor: '#ffa400' }} onPress={() => navigation.goBack()}>
                                        <Ionicons name="arrow-back" size={30} color="#FFFFFF"></Ionicons>
                                    </Pressable>
                                );
                            },
                            headerBackVisible: false,
                        })}
                    />


                </StackNav.Navigator>
            </NavigationContainer>
        </>
    );

}

export default AlumniyeNav;