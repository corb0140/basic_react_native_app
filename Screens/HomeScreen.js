import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>This Is React Native Exercise 1</Text>
      <Button
        style={styles.buttonContainer}
        title="Go to Gallery Page"
        onPress={() => navigation.navigate("Gallery")}
      />
      <Button
        style={styles.buttonContainer}
        title="Go to Games Page"
        onPress={() => navigation.navigate("Games")}
        color={"#f19"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 50,
  },
});
