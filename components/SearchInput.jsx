import { View, Text, TextInput, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { icons } from '../constants';
import { router, usePathname } from 'expo-router';

const SearchInput = ({ title, value, placeholder, handleChangeText, styles, ...props }) => {
        const pathname = usePathname();
        const [query, setQuery] = useState('');

        return (
                <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
                        <TextInput
                                className="flex-1 text-white font-pregular text-base"
                                value={query}
                                placeholder="Search for a video topic"
                                placeholderTextColor="#CDCDE0"
                                onChangeText={(e) => setQuery(e)}
                        />
                        <TouchableOpacity
                                onPress={() => {
                                        if (!query) {
                                                return Alert.alert('Please type something to search result');
                                        }
                                        if (pathname.startsWith('/search')) {
                                                router.setParams({ query });
                                        } else router.push(`/search/${query}`);
                                }}
                        >
                                <Image source={icons.search} className="w-6 h-6" resizeMode="contain" />
                        </TouchableOpacity>
                </View>
        );
};

export default SearchInput;
