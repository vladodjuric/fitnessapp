import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const username = route?.params?.username;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello there, {username}, here are some workouts:
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("ChestExercises")}>
        <Text style={styles.link}>Chest Exercises</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ShoulderExercises")}
      >
        <Text style={styles.link}>Shoulder Exercises</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("BackExercises")}>
        <Text style={styles.link}>Back Exercises</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CoreExercises")}>
        <Text style={styles.link}>Core Exercises</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LegExercises")}>
        <Text style={styles.link}>Leg Exercises</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  link: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default LandingPage;
