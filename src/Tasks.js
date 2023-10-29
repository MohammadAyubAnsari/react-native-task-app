import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React from "react";

const Tasks = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Add your task"
        ></TextInput>
        <Button title="Add Task" />
      </View>
      <View>
        <Text style={styles.border}></Text>
        <Text style={styles.textTitle}>Your Task:</Text>
      </View>
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
});
