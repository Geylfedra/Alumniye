import * as React from 'react';
import { View, Text, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const IsiForum = () => {
    return (
        <View className="mt-2">
            <Card>
                <View className="flex flex-row">
                    <Pressable className="basis-3/4">
                        <Card.Title title="Judul Forum" subtitle="Geylfedra Matthew" left={LeftContent} />
                    </Pressable>
                    <Pressable className="basis-1/4 mt-4 ml-[50]">
                        <Ionicons name={'ellipsis-vertical-outline'} size={30} color={'black'} />
                    </Pressable>
                </View>
                <View>
                    <Card.Content className="mb-2">
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, malesuada nisl, lacus amet pulvinar. Consectetur imperdiet semper </Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} className="mx-1" />
                    <Card.Actions>
                        <View className="flex flex-row w-full gap-2">
                            <Ionicons name={'heart-outline'} size={30} color={'black'} />
                            <Ionicons name={'chatbubble-outline'} size={30} color={'black'} />
                        </View>
                    </Card.Actions>
                </View>
            </Card>
        </View>
    );
}
export default IsiForum;