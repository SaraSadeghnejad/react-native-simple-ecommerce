import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Switch, Text, View } from 'react-native';
import { useColorScheme } from 'nativewind';
import ProductsList from './components/ProductsList';
export default function App() {
  const {colorScheme,toggleColorScheme} = useColorScheme();
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-gray-200 dark:bg-black">
   <View className="flex-row w-full gap-3">
    <Switch value={colorScheme==="dark"} onChange={toggleColorScheme}/>
      <Text className="dark:text-white font-bold text-2xl">Open up App.js to start working on your app!</Text>
      </View>
      <ProductsList />
      <StatusBar style={colorScheme=== "dark" ? "light" : "dark"} />
    </SafeAreaView>
  );
}


