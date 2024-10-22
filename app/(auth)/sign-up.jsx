import { View, Text, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField.jsx';
import CustomButton from '../../components/CustomButton.jsx';
import { Link, router } from 'expo-router';
import { images } from '../../constants';
import { createUser } from '../../libs/appwrite.js';

const SignUp = () => {
        const [form, setForm] = useState({
                username: '',
                email: '',
                password: '',
        });

        const [isSubmitting, setIsSubmitting] = useState(false);
        const submit = async () => {
                if (!form.username || !form.email || !form.password) {
                        Alert.alert('Error', 'Please fill in all the required field.');
                }
                setIsSubmitting(true);
                try {
                        const result = await createUser(form.email, form.password, form.username);

                        //Set it to global state...
                        router.replace('/home');
                } catch (error) {
                        Alert.alert('Error', error);
                } finally {
                        setIsSubmitting(false);
                }
        };
        return (
                <SafeAreaView className="bg-primary h-full">
                        <ScrollView>
                                <View className="w-full min-h-[90vh] justify-center px-4 my-6">
                                        <Image source={images.logo} resizeMode="contain" className="w-40 h-12 mx-auto" />
                                        <Text className="text-2xl text-white mt-8 mb-8 mx-auto font-psemibold">Sign up to Aora</Text>
                                        <FormField title="Username" value={form.username} handleChangeText={(e) => setForm({ ...form, username: e })} styles="mt-8" />
                                        <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} styles="mt-8" keyboardType="email-address" />
                                        <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} styles="mt-8" />
                                        <CustomButton title="Sign Up" handlePress={submit} containerStyles="mt-12" isLoading={isSubmitting} />
                                        <View className="justify-center pt-5 flex-row gap-2">
                                                <Text className="text-lg text-gray-200 font-pregular">Already have an account?</Text>
                                                <Link href="/sign-in" className="text-lg font-psemibold text-secondary">
                                                        Sign In Now
                                                </Link>
                                        </View>
                                </View>
                        </ScrollView>
                </SafeAreaView>
        );
};

export default SignUp;
