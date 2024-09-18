import { SafeAreaView } from "react-native-safe-area-context";
import {
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Text,
  View,
} from "react-native";

import { cars } from "../cars";

export default function GalleryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {cars.map((car, index) => (
          <Image key={index} source={car} style={styles.image} />
        ))}
      </ScrollView>

      <View style={styles.view}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Go to Home Page</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Games")}
        >
          <Text>Go to Games Page</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 5,
  },
  image: {
    width: 350,
    height: 350,
    objectFit: "cover",
    marginVertical: 10,
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
  },
  button: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
  },
});
