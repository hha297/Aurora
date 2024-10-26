import { useLocalSearchParams } from 'expo-router';
import useAppwrite from '../../libs/useAppwrite.js';
import { searchPosts } from '../../libs/appwrite.js';
import { useEffect } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import SearchInput from '../../components/SearchInput.jsx';
import EmptyState from '../../components/EmptyState.jsx';
import VideoCard from '../../components/VideoCard.jsx';

const Search = () => {
        const { query } = useLocalSearchParams();
        const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

        useEffect(() => {
                refetch();
        }, [query]);

        return (
                <SafeAreaView className="bg-primary h-full">
                        <FlatList
                                data={posts}
                                keyExtractor={(item) => item.$id}
                                renderItem={({ item }) => <VideoCard video={item} />}
                                ListHeaderComponent={() => (
                                        <>
                                                <View className="flex my-6 px-4">
                                                        <Text className="font-pmedium text-gray-100 text-sm mt-10">Search Results</Text>
                                                        <Text className="text-2xl font-psemibold text-white mt-1">{query}</Text>

                                                        <View className="mt-6 mb-8">
                                                                <SearchInput initialQuery={query} refetch={refetch} />
                                                        </View>
                                                </View>
                                        </>
                                )}
                                ListEmptyComponent={() => <EmptyState title="No Videos Found" subtitle="No videos found for this search query" />}
                        />
                </SafeAreaView>
        );
};

export default Search;
