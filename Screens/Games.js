import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, FlatList, Pressable, View } from "react-native";
import { useState } from "react";

const DATA = [
  { id: "1", title: "Rainbow Six: Seige" },
  { id: "2", title: "Black Desert" },
  { id: "3", title: "Mario Kart" },
  { id: "4", title: "Remnant" },
  { id: "5", title: "SSX Tricky" },
];

const Item = ({ item, onPress, animate }) => (
  <View style={styles.view}>
    <Pressable style={[styles.item, animate]} onPress={onPress}>
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  </View>
);

export default function Games() {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const animate = item.id === selectedId ? styles.animate : null;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        animate={animate}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
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
    color: "black",
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
  view: {
    flex: 1,
    alignItems: "center",
  },
  animate: {
    transform: [{ scale: 1.15 }],
    backgroundColor: "purple",
  },
});
