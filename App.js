import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (text) => {
    setGoal((currentGoal) => [...currentGoal, text]);
  };

  const deleteGoalHandler = (indexToDelete) => {
    setGoal((currentGoals) => {
      return currentGoals.filter((_, idx) => idx !== indexToDelete);
    });
  };

  const modalHandler = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={modalHandler} />
      {modalVisible && <GoalInput onAddGoal={addGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={goal}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => {
            return (
              <GoalItem
                index={itemData.index}
                item={itemData.item}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
