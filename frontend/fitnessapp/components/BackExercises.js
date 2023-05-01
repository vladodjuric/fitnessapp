import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import api from "../services/api";

const BackExercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/back_exercises/");
        setExercises(response.data.exercises);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.duration_seconds}</Text>
      <Text style={styles.cell}>{item.sets}</Text>
      <Text style={styles.cell}>{item.difficulty}</Text>
      <Text style={styles.cell}>{item.category}</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles.title}>Back Exercises</Text>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Duration (s)</Text>
        <Text style={styles.headerCell}>Sets</Text>
        <Text style={styles.headerCell}>Difficulty</Text>
        <Text style={styles.headerCell}>Category</Text>
      </View>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  headerCell: {
    flex: 1,
    fontWeight: "bold",
    paddingVertical: 10,
    textAlign: "center",
  },
  cell: {
    flex: 1,
    paddingVertical: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default BackExercises;
