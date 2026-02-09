import { Tabs } from "expo-router";
import { Theme } from "@/constant/Theme";
import { Ionicons } from "@expo/vector-icons";
const Dashboardlayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#e6e6e6",
          padding: 10,
          height: 70,
        },

        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="Books"
        options={{
          title: "Books",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={23}
              name={focused ? "book" : "book-outline"}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={23}
              name={focused ? "create" : "create-outline"}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              size={23}
              name={focused ? "person" : "person-outline"}
              color={focused ? "black" : "gray"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Dashboardlayout;
