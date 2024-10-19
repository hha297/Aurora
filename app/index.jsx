import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function App() {
        return (
                <View className="flex-1 items-center justify-center bg-white">
                        <Text className="font-pblack">Aurora</Text>
                        <Link href="/home">Go to Home</Link>
                </View>
        );
}
