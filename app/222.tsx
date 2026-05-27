import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
const properties = [
  { id: "1", title: "Modern Villa", city: "Mumbai", price: "1.2cr" },
  { id: "2", title: "Sea View Villa", city: "Mumbai", price: "1.8cr" },
  { id: "3", title: "Studio Loft", city: "Mumbai", price: "1cr" },
];
export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#ffff" }}
        className="bg-white border-red-300 border-b-2"
      >
        <View style={{ padding: 50 }}>
          <Text>Hellossss</Text>
          <TextInput
            placeholder="enter name"
            placeholderTextColor="#999"
            style={{
              borderWidth: 1,
              borderColor: "#a3a2a2",
              borderRadius: 8,
              padding: 10,
              marginTop: 15,
            }}
          />
          <TouchableOpacity
            onPress={() => alert("hello")}
            style={{
              backgroundColor: "#2563EB",
              padding: 12,
              borderRadius: 8,
              marginTop: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "500" }}>Search</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={properties}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: "#f9f9f9",
                padding: 12,
                borderRadius: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ color: "#666" }}>{item.city}</Text>
              <Text style={{ color: "#2563EB" }}>{item.price}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </ThemeProvider>
  );
}
