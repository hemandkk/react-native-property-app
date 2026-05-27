import { useAuth } from "@clerk/expo";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace("/(auth)/sign-in");
    } catch (err) {
      console.error("Error in singing out", err);
    }
  };
  return (
    <SafeAreaView className="flex-1 py-12 px-6">
      <Text>Profile</Text>
      <TouchableOpacity
        className="bg-blue-500 w-full py-4 rounded-xl items-center mb-4 "
        onPress={handleSignOut}
      >
        <Text className="text-white"> logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
