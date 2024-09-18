import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, FlatList, Pressable, View } from "react-native";
import { useState } from "react";

const DATA = [
  { id: "1", title: "Rainbow Six: Seige" },
  { id: "2", title: "Black Desert" },
  { id: "3", title: "Mario Kart" },
  { id: "4", title: "Remnant" },
  { id: "5", title: "SSX Tricky" },
  { id: "6", title: "Halo" },
  { id: "7", title: "Call of Duty" },
  { id: "8", title: "Fortnite" },
  { id: "9", title: "Apex Legends" },
  { id: "10", title: "GTA V" },
];

const Item = ({ item, onPress, toggleStyle, textColor }) => (
  <View style={styles.itemView}>
    <Pressable style={[styles.item, toggleStyle]} onPress={onPress}>
      <Text style={[styles.text, textColor]}>{item.title}</Text>
    </Pressable>
  </View>
);

export default function GamesScreen({ navigation }) {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const toggleStyle = item.id === selectedId ? styles.toggleStyle : null;
    const textColor = item.id === selectedId ? { color: "white" } : null;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        toggleStyle={toggleStyle}
        textColor={textColor}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text>Go to Home Page</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Text>Go to Gallery Page</Text>
        </Pressable>
      </View>

      <Text style={styles.heading}>Games</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "30%",
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 20,
    textDecorationLine: "underline",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    fontSize: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "lightblue",
    height: 60,
    width: 300,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemView: {
    flex: 1,
    alignItems: "center",
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingBottom: 50,
  },
  toggleStyle: {
    transform: [{ scale: 1.15 }],
    backgroundColor: "purple",
  },
  button: {
    padding: 15,
    backgroundColor: "lightblue",
  },
});
