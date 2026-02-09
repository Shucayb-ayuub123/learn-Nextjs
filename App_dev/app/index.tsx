import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={'/Profile'} className="mt-4 font-medium text-lg">profile page</Link>
      <Link href={'/Login'} className="mt-4 font-semibold text-xl text-red-500">Login</Link>
    </View>
  );
}
