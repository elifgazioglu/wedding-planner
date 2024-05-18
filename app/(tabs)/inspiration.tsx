import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const inspiration = () => {
  return (
    <View>
      <Link href={"/listing/1234"}>Listing</Link>
    </View>
  )
}

export default inspiration