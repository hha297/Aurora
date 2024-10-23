import { View, Text, FlatList, Image, RefreshControl } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput.jsx';
import Trending from '../../components/Trending.jsx';
import EmptyState from '../../components/EmptyState.jsx';
const Home = () => {
        const [refreshing, setRefreshing] = useState(false);
        const onRefresh = async () => {
                setRefreshing(true);
                //Recall videos => Get new video if appeared
        };
        return (
                <SafeAreaView className="bg-primary h-full">
                        <FlatList
                                data={[]}
                                keyExtractor={(item) => item.$id}
                                renderItem={({ item }) => <Text>{item}</Text>}
                                ListHeaderComponent={() => (
                                        <View className="my-6 px-4 space-y-6">
                                                <View className="justify-between items-start flex-row mb-6">
                                                        <View>
                                                                <Text className="font-pmedium text-sm text-gray-200">Welcome Back</Text>
                                                                <Text className="font-psemibold text-2xl text-gray-200">Hoang Ha</Text>
                                                        </View>
                                                        <View className="mt-2">
                                                                <Image source={images.logoSmall} className="w-9 h-9" resizeMode="contain" />
                                                        </View>
                                                </View>
                                                <SearchInput />
                                                <View className="w-full flex-1 pt-5 pb-8">
                                                        <Text className="text-gray-100 text-lg font-pregular mb-3">Lates Videos</Text>
                                                        <Trending posts={[{ id: 1 }] ?? []} />
                                                </View>
                                        </View>
                                )}
                                ListEmptyComponent={() => <EmptyState title="No Videos Found" subtitle="Be the first one to upload video" />}
                                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        />
                </SafeAreaView>
        );
};

export default Home;
