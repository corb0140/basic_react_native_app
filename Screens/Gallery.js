import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet, ScrollView } from "react-native";

import { cars } from "../cars";

export default function Gallery() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {cars.map((car, index) => (
          <Image key={index} source={car} style={styles.image} />
        ))}
      </ScrollView>
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
});
