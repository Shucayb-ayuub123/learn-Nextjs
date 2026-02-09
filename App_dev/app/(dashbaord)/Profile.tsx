import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import useUser from "@/hooks/useUser";
const Profile = () => {
  const {Logout , user} = useUser()
  return (
    <View className="bg-blue-500 flex-1 flex justify-center items-center">
      <Text className="text-3xl text-white font-bold">{user?.email}</Text>
      <Link href={"/"}>home</Link>

      <Pressable className="bg-purple-700  mt-4 px-6 py-2 rounded-md" onPress={Logout}>
        <Text className="text-white">Logout</Text>
      </Pressable>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
