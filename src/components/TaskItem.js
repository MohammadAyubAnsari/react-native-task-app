import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TaskItem = ({ index, item }) => {
  return (
    <View>
      <Text style={styles.taskItem}>
        {index + 1} : {item}
      </Text>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    margin: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "green",
    color: "white",
  },
});
