import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function App() {
        return (
                <View className="flex-1 items-center justify-center bg-white">
                        <Text className="font-pblack">Aurora</Text>
                        <Link href="/profile">Go to Profile</Link>
                </View>
        );
}
