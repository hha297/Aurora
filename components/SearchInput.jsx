import { View, Text, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { icons } from '../constants';

const SearchInput = ({ title, value, placeholder, handleChangeText, styles, ...props }) => {
        const [showPassword, setShowPassword] = useState(false);
        return (
                <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
                        <TextInput
                                className="flex-1 text-white font-pregular text-base"
                                value={value}
                                placeholder="Search for a video topic"
                                placeholderTextColor="#7b7b8b"
                                onChangeText={handleChangeText}
                                secureTextEntry={title === 'Password' && !showPassword}
                        />
                        <TouchableOpacity>
                                <Image source={icons.search} className="w-6 h-6" resizeMode="contain" />
                        </TouchableOpacity>
                </View>
        );
};

export default SearchInput;
