import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  // handle input values
  const handleInputValue = (inputTask) => {
    setTask(inputTask);
  };

  //add task button
  const handleAddTask = () => {
    setTasklist((prevTask) => [...prevTask, task]);
    // alert("task added!");
    setTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputValue}
          style={styles.inputBox}
          placeholder="Add your task"
        ></TextInput>
        <Button onPress={handleAddTask} title="Add Task" />
      </View>

      <Text style={styles.border}></Text>
      <Text style={styles.textTitle}>Your Task:</Text>
      <FlatList
        data={tasklist}
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.taskItem}>
              {index + 1} : {item}
            </Text>
          );
        }}
        keyExtractor={(item, index) => {
          return index;
        }}
      />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 15,
  },
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
  textTitle: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: "bold",
    color: "blue",
  },
  border: {
    borderBottomWidth: 1,
    color: "#cccccc",
  },
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "green",
    color: "white",
  },
});
