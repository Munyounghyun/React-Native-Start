import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goal, setGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  //아이템 더하기
  const addGoalHandler = (text) => {
    setGoal((currentGoal) => [...currentGoal, text]);
    endModalHandler();
  };

  //아이템 삭제
  const deleteGoalHandler = (indexToDelete) => {
    setGoal((currentGoals) => {
      return currentGoals.filter((_, idx) => idx !== indexToDelete);
    });
  };

  //모달 열기
  const modalHandler = () => {
    setModalVisible(true);
  };
  //모달 닫기
  const endModalHandler = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={modalHandler} />
      {modalVisible && (
        <GoalInput onAddGoal={addGoalHandler} onCancel={endModalHandler} />
      )}
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
