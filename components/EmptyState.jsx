import { View, Text, Image } from 'react-native';
import React from 'react';
import images from '../constants/images.js';
import CustomButton from '../components/CustomButton.jsx';
import { router } from 'expo-router';
const EmptyState = ({ title, subtitle }) => {
        return (
                <View className="justify-center items-center px-4">
                        <Image source={images.empty} className="w-72 h-72" resizeMode="contain" />
                        <Text className="font-pmedium text-sm text-gray-200">{subtitle}</Text>
                        <Text className="font-psemibold text-2xl text-white mt-2">{title}</Text>
                        <CustomButton title="Create video" handlePress={() => router.push('/create')} containerStyles="w-full my-5" />
                </View>
        );
};

export default EmptyState;
