import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Create = () => {
  return (
     <SafeAreaView className='bg-blue-500 flex-1   items-center'>
          <Text className='text-3xl text-white font-bold'>Create</Text>
        </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({})