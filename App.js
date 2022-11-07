import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CleaningServices from "./components/screens/CleaningServices";
import ServiceDetails from "./components/screens/ServiceDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        initialRouteName="CleaningServices"
        screenOptions={{ headerTitleAlign: "center" }}
      >
        <Stack.Screen name="Cleaning Services" component={CleaningServices} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} options={
          ({ route }) => ({
            title: route.params.item.serviceName,
            headerShown: true
          })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
