import { View, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";

const AddTask = ({ handleAddTaskButton }) => {
  const [task, setTask] = useState("");

  // handle input values
  const handleInputValue = (inputTask) => {
    setTask(inputTask);
  };

  const addTask = () => {
    if (!task) {
      return alert("Please Add Task");
    }
    handleAddTaskButton(task);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInputValue}
        style={styles.inputBox}
        placeholder="Add your task"
      ></TextInput>
      <Button onPress={addTask} title="Add Task" />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  inputBox: {
    width: "75%",
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 15,
  },
});
