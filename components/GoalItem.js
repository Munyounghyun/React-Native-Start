import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalListView}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        key={props.index}
        onPress={() => {
          props.onDeleteItem(props.index);
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{props.item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalListView: {
    borderWidth: 1,
    borderColor: "#ccc",
    margin: 7,
    backgroundColor: "#5e0acc",
    borderRadius: 8,
  },
  goalItem: {
    color: "white",
    padding: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
