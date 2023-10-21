import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const [text, setText] = useState("");

  const goalInputHandler = (e) => {
    setText(e);
  };

  const addGoalHandler = () => {
    props.onAddGoal(text);
    setText("");
  };

  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your courese goal!"
          onChangeText={goalInputHandler}
          value={text}
        />
        <Button title="ADD GOAL" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBlockColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "60%",
    marginRight: 8,
    padding: 8,
  },
});
