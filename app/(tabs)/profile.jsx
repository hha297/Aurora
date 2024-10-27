import useAppwrite from '../../libs/useAppwrite.js';
import { getUserPosts, searchPosts, signOut } from '../../libs/appwrite.js';

import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';

import EmptyState from '../../components/EmptyState.jsx';
import VideoCard from '../../components/VideoCard.jsx';
import { useGlobalContext } from '../../context/GlobalProvider.js';
import { TouchableOpacity } from 'react-native';
import icons from '../../constants/icons.js';
import InfoBox from '../../components/InfoBox.jsx';
import { router } from 'expo-router';
const Profile = () => {
        const { user, setUser, setIsLoggedIn } = useGlobalContext();
        const { data: posts } = useAppwrite(() => getUserPosts(user.$id));
        const logout = async () => {
                try {
                        await signOut();
                        setUser(null);
                        setIsLoggedIn(false);
                        router.replace('/sign-in');
                } catch (error) {
                        console.error('Error during logout:', error);
                }
        };
        return (
                <SafeAreaView className="bg-primary h-full">
                        <FlatList
                                data={posts}
                                keyExtractor={(item) => item.$id}
                                renderItem={({ item }) => <VideoCard video={item} />}
                                ListHeaderComponent={() => (
                                        <View className="w-full justify-center items-center mt-16 mb-16 px-4">
                                                <TouchableOpacity className="w-full items-end mb-10" onPress={logout}>
                                                        <Image source={icons.logout} resizeMode="contain" className="w-6 h-6" />
                                                </TouchableOpacity>
                                                <View className="w-20 h-20 border border-secondary rounded-lg justify-center items-center">
                                                        <Image source={{ uri: user?.avatar }} className="w-[90%] h-[90%] rounded-lg" resizeMode="cover" />
                                                </View>
                                                <InfoBox title={user?.username} containerStyles="mt-5" titleStyles="text-2xl" />
                                                <View className="mt-5 flex-row">
                                                        <InfoBox title={posts.length || 0} subtitle="Posts" containerStyles="mr-10" titleStyles="text-2xl" />
                                                        <InfoBox title="1.2k" subtitle="Followers" titleStyles="text-2xl" />
                                                </View>
                                        </View>
                                )}
                                ListEmptyComponent={() => <EmptyState title="No Videos Found" subtitle="No videos found for this search query" />}
                        />
                </SafeAreaView>
        );
};

export default Profile;
