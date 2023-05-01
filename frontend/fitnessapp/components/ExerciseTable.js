import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExerciseTable = ({ exercises }) => {
  return (
    <View>
      {exercises.map((exercise) => (
        <View key={exercise.id} style={styles.row}>
          <Text style={styles.cell}>{exercise.name}</Text>
          <Text style={styles.cell}>{exercise.duration_seconds}</Text>
          <Text style={styles.cell}>{exercise.sets}</Text>
          <Text style={styles.cell}>{exercise.difficulty}</Text>
          <Text style={styles.cell}>{exercise.category}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  cell: {
    flex: 1,
    textAlign: "center",
  },
});

export default ExerciseTable;
