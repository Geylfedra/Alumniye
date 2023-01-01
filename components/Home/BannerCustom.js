import * as React from 'react';
import { View, Text, ScrollView, Image, Pressable, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const BannerCustom = () => {
    return (
        <ScrollView className="pt-2 align-center" horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity>
                {/* Banner Pertama */}
                <Card className="mx-1 rounded-xl" style={{ width: 320, height: 270 }}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/320/260' }} />
                    <Card.Content className="my-2">
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
            </TouchableOpacity>

            <TouchableOpacity>
                {/* Banner Kedua */}
                <Card className="mx-3" style={{ width: 320, height: 270 }}>
                    <Card.Cover source={{ uri: 'https://picsum.photos/320/260' }} />
                    <Card.Content className="my-2">
                        <Title>Card title</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        </ScrollView>
    );
}
export default BannerCustom;