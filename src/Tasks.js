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
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";

const Tasks = () => {
  const [tasklist, setTasklist] = useState([]);

  //add task button
  const handleAddTask = (task) => {
    setTasklist((prevTask) => [...prevTask, task]);
    // alert("task added!");
    // setTask("");
  };

  return (
    <View style={styles.container}>
      <AddTask handleAddTaskButton={handleAddTask} />
      <Text style={styles.border}></Text>
      {tasklist.length > 0 ? (
        <Text style={styles.textTitle}>Your Task:</Text>
      ) : (
        <Text style={styles.textTitle}>No Task:</Text>
      )}
      {/* <Text style={styles.textTitle}>Your Task:</Text> */}
      <FlatList
        data={tasklist}
        renderItem={({ item, index }) => {
          return <TaskItem item={item} index={index} />;
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
});
