import { View, Text } from 'react-native'
import React from 'react'

export default function ProductCard([
    image,
    category,
    title,
    price,
    description
]) {
    const [count,setCount]= useState(1);
    const {colorScheme}=useColorScheme();
  return (
    <View className="w-full bg-white dark:bg-gray-50/10 rounded-3xl p-5 my-5">
      <View className="bg-white rounded-xl">
        <Image 
        soure={{uri:image}} className="w-full h-72"
        style={{resizeMode:"contain"}}
        />
      </View>
      <View className="mt-5">
      <Text className="text-sm text-black/60 dark:text-white/70">{category}</Text>
      <Text className="text-lg font-semibold dark:text-white">{title}</Text>
      <AntDesign
        name=""
        size={24}
        color={colorScheme==="light"?"black":"white"}
        onPress={()=>setCount(count-1)}
      />
      <Text
      numberOfLines={2}
      className="text-sm text-black/60 "
      >{description}</Text>
      <Text>{price}</Text>
      </View>
    </View>
  )
}