import {
  StyleSheet,
  Pressable,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { dismiss } from "expo-router/build/global-state/routing";
import useUser from "@/hooks/useUser";
const Regiter = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const { Register } = useUser();
  const handleSubmit = async () => {
    console.log("Email : ", email);
    console.log("password : ", password);
    try {
      setError("");
      await Register(email, password);
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "android" ? "padding" : "height"}
      >
        <SafeAreaView className="flex-1 justify-center items-center space-y-11">
          <TextInput
            placeholder="Enter Email"
            className=" w-9/12 border-[1px] px-3 border-black rounded-md mt-3"
            keyboardType="email-address"
            onChangeText={setemail}
            value={email}
          />
          <TextInput
            placeholder="Enter password"
            className=" w-9/12 border-[1px] px-3 rounded-md mt-4"
            secureTextEntry
            onChangeText={setpassword}
            value={password}
          />
          <Pressable
            className="bg-slate-400 mt-9 text-center w-8/12 h-14 p-2 rounded-md"
            onPress={handleSubmit}
          >
            <Text className="text-red-500 text-center  w-full font-semibold text-3xl ">
              Regiter
            </Text>
          </Pressable>

          {error && (
            <View className="w-8/12 bg-red-300 p-4 mt-4 rounded-lg">
              <Text className="font-semibold text-center">{error}</Text>
            </View>
          )}

          <Link href={"/Login"} className="mt-10">
            Login Instead
          </Link>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Regiter;

const styles = StyleSheet.create({});
