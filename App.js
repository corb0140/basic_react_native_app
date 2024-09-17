import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

import HomeScreen from "./Screens/HomeScreen";
import Gallery from "./Screens/Gallery";
import Games from "./Screens/Games";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Games" component={Games} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
