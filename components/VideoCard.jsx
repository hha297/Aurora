import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import icons from '../constants/icons.js';
import { TouchableOpacity } from 'react-native';
import { ResizeMode, Video } from 'expo-av';

const VideoCard = ({
        video: {
                title,
                thumbnail,
                video,
                creator: { username, avatar },
        },
}) => {
        const [play, setPlay] = useState(false);
        return (
                <View className="flex-col items-center px-4 mb-12">
                        <View className="flex-row gap-3 items-start">
                                <View className="justify-center items-center flex-row flex-1">
                                        <View className="w-12 h-12 rounded-lg border border-secondary justify-center items-center p-1">
                                                <Image source={{ uri: avatar }} className="w-full h-full rounded-lg" resizeMode="cover" />
                                        </View>
                                        <View className="justify-center flex-1 ml-3 gap-y-1">
                                                <Text className="text-white font-psemibold text-sm" numberOfLines={1}>
                                                        {title}
                                                </Text>
                                                <Text className="text-xs text-gray-100 font-pregular" numberOfLines={1}>
                                                        {username}
                                                </Text>
                                        </View>
                                </View>
                                <View className="pt-2">
                                        <Image source={icons.menu} className="w-4 h-4" resizeMode="contain" />
                                </View>
                        </View>
                        {play ? (
                                <Video
                                        source={{ uri: video }}
                                        className="w-full h-60 rounded-[33px] mt-3"
                                        resizeMode={ResizeMode.CONTAIN}
                                        useNativeControls
                                        shouldPlay
                                        onPlaybackStatusUpdate={(status) => {
                                                if (status.didJustFinish) {
                                                        setPlay(false);
                                                }
                                        }}
                                />
                        ) : (
                                <TouchableOpacity className="w-full h-60 rounded-xl mt-3 relative justify-center items-center" activeOpacity={0.7} onPress={() => setPlay(true)}>
                                        <Image source={{ uri: thumbnail }} className="w-full h-full rounded-xl mt-3" resizeMode="cover" />
                                        <Image
                                                source={icons.play}
                                                className="h-12 w-12 absolute
                                        "
                                                resizeMode="contain"
                                        />
                                </TouchableOpacity>
                        )}
                </View>
        );
};

export default VideoCard;
