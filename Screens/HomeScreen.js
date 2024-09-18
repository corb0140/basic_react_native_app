import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, StyleSheet, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textStyle}>Basic React Native App</Text>

      <View style={styles.buttonView}>
        <Button
          title="Go to Gallery Page"
          onPress={() => navigation.navigate("Gallery")}
        />
        <Button
          title="Go to Games Page"
          onPress={() => navigation.navigate("Games")}
          color={"#f19"}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 50,
  },
  buttonView: {
    flex: 1,
    gap: 10,
  },
});
