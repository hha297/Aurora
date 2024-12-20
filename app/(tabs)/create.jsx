import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField.jsx';
import { TouchableOpacity } from 'react-native';
import { ResizeMode, Video } from 'expo-av';
import icons from '../../constants/icons.js';
import CustomButton from '../../components/CustomButton.jsx';
const Create = () => {
        const [uploading, setUploading] = useState(false);
        const [form, setForm] = useState({
                title: '',
                video: null,
                thumbnail: null,
                prompt: '',
        });

        const openPicker = async (selectType) => {};

        const submit = () => {};
        return (
                <SafeAreaView className="bg-primary h-full">
                        <ScrollView className="px-4 my-8">
                                <Text className="text-2xl text-white font-psemibold mb-16">Upload Video</Text>
                                <FormField title="Title" value={form.title} placeholder="Give your video a catchy title..." handleChangeText={(e) => setForm({ ...form, title: e })} />
                                <View className="mt-6 space-y-2">
                                        <Text className="text-base text-gray-100 font-psemibold">Upload Video</Text>
                                        <TouchableOpacity onPress={() => openPicker('video')}>
                                                {form.video ? (
                                                        <Video source={{ uri: form.video.uri }} className="w-full h-64 rounded-2xl" useNativeControls resizeMode={ResizeMode.COVER} isLooping />
                                                ) : (
                                                        <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                                                                <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                                                                        <Image source={icons.upload} resizeMode="contain" className="w-1/2 h-1/2" />
                                                                </View>
                                                        </View>
                                                )}
                                        </TouchableOpacity>
                                </View>
                                <View className="mt-7 space-y-2">
                                        <Text className="text-base text-gray-100 font-psemibold">Thumbnail Image</Text>
                                        <TouchableOpacity onPress={() => openPicker('image')}>
                                                {form.thumbnail ? (
                                                        <Image source={{ uri: form.thumbnail.uri }} resizeMode="cover" className="w-full h-65 rounded-2xl" />
                                                ) : (
                                                        <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2">
                                                                <Image source={icons.upload} resizeMode="contain" className="w-5 h-5" />
                                                                <Text className="text-sm text-gray-100 font-pmedium">Choose a file</Text>
                                                        </View>
                                                )}
                                        </TouchableOpacity>
                                </View>
                                <FormField
                                        title="AI Prompt"
                                        value={form.prompt}
                                        placeholder="The prompt you used to create this video"
                                        handleChangeText={(e) => setForm({ ...form, prompt: e })}
                                        styles="mt-6"
                                />
                                <CustomButton title="Submit & Publish" handlePress={submit} containerStyles="mt-7" isLoading={uploading} />
                        </ScrollView>
                </SafeAreaView>
        );
};

export default Create;
