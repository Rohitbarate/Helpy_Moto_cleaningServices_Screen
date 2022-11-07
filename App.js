import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,ActivityIndicator } from "react-native";
import CleaningServices from "./components/screens/CleaningServices";
import ServiceDetails from "./components/screens/ServiceDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from 'expo-font';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
      'Jost':require('./assets/fonts/Jost-Black.ttf'),
      'Jost-Bold':require('./assets/fonts/Jost-Bold.ttf'),
      'Jost-ExtraBold':require('./assets/fonts/Jost-ExtraBold.ttf'),
      'Jost-ExtraLight':require('./assets/fonts/Jost-ExtraLight.ttf'),
      'Jost-Light':require('./assets/fonts/Jost-Light.ttf'),
      'Jost-Medium':require('./assets/fonts/Jost-Medium.ttf'),
      'Jost-Regular':require('./assets/fonts/Jost-Regular.ttf'),
      'Jost-SemiBold':require('./assets/fonts/Jost-SemiBold.ttf'),
      'Jost-Thin':require('./assets/fonts/Jost-Thin.ttf'),
    })

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer >
      <StatusBar style="auto" />
      {!fontsLoaded?<ActivityIndicator size="large" color='#5D5FEF' />:<Stack.Navigator
        initialRouteName="CleaningServices"
        screenOptions={{ headerTitleAlign: "center" ,
        headerTitleStyle:{fontFamily:'Jost-SemiBold',fontSize:16}}}
      >
        <Stack.Screen name="Cleaning Services" component={CleaningServices} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} options={
          ({ route }) => ({
            title: route.params.item.serviceName,
            headerShown: true
          })} />
      </Stack.Navigator>}
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
