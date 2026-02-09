import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Books = () => {
  return (
    <SafeAreaView className='bg-blue-500 flex-1'>
      <Text className='text-3xl text-white font-bold'>Books</Text>
    </SafeAreaView>
  )
}

export default Books

