import { Redirect, router } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton.jsx';
import { StatusBar } from 'expo-status-bar';

export default function App() {
        return (
                <SafeAreaView className="bg-primary h-full">
                        <ScrollView contentContainerStyle={{ height: '100%' }}>
                                <View className="w-full justify-center items-center min-h-[90vh] px-4">
                                        <Image source={images.logo} className="w-32 h-20" resizeMode="contain" />
                                        <Image source={images.cards} className="max-w-sm w-full h-72" resizeMode="contain" />
                                        <View className="relative mx-5">
                                                <Text className="text-3xl text-white font-pbold text-center">
                                                        Discover Endless Possibilities With <Text className=" text-secondary font-bold ">Aora</Text>
                                                </Text>
                                                <Image source={images.path} className="w-32 h-4 absolute -bottom-2 -right-8" resizeMode="contain" />
                                        </View>
                                        <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation: embark on a journey of limitless exploration</Text>
                                        <CustomButton title="Continue with Email" handlePress={() => router.push('/sign-in')} containerStyles="w-full mt-6" />
                                </View>
                        </ScrollView>
                        <StatusBar backgroundColor="#161622" style="light" />
                </SafeAreaView>
        );
}
