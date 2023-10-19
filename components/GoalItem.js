import { StyleSheet, Text, View } from "react-native";

const GoalItem = (item) => {
  return (
    <View key={item.index} style={styles.goalListView}>
      <Text style={styles.goalItem}>{item.item}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalListView: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 7,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  goalItem: {
    color: "white",
  },
});
