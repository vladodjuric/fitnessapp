import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingPage from "./components/LandingPage";
import ChestExercises from "./components/ChestExercises";
import ShoulderExercises from "./components/ShoulderExercises";
import BackExercises from "./components/BackExercises";
import CoreExercises from "./components/CoreExercises";
import LegExercises from "./components/LegExercises";
import LoginPage from "./components/LoginPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ title: "Workouts" }}
        />
        <Stack.Screen
          name="ChestExercises"
          component={ChestExercises}
          options={{ title: "Chest Exercises" }}
        />
        <Stack.Screen
          name="ShoulderExercises"
          component={ShoulderExercises}
          options={{ title: "Shoulder Exercises" }}
        />
        <Stack.Screen
          name="BackExercises"
          component={BackExercises}
          options={{ title: "Back Exercises" }}
        />
        <Stack.Screen
          name="CoreExercises"
          component={CoreExercises}
          options={{ title: "Core Exercises" }}
        />
        <Stack.Screen
          name="LegExercises"
          component={LegExercises}
          options={{ title: "Leg Exercises" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from "react";
// // import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import LandingPage from "./components/LandingPage";
// import ChestExercises from "./components/ChestExercises";
// import ShoulderExercises from "./components/ShoulderExercises";
// import BackExercises from "./components/BackExercises";
// import CoreExercises from "./components/CoreExercises";
// import LegExercises from "./components/LegExercises";
// import LoginPage from "./components/LoginPage";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={LoginPage} />
//         <Route path="/landing" component={LandingPage} />
//       </Switch>
//     </Router>
//   {/* <NavigationContainer> */ }
// {/*   <Stack.Navigator initialRouteName="LandingPage"> */ }
// {/*     <Stack.Screen */ }
// {/*       name="LandingPage" */ }
// {/*       component={LandingPage} */ }
// {/*       options={{ title: "Workouts" }} */ }
// {/*     /> */ }
// {/*     <Stack.Screen */ }
// {/*       name="ChestExercises" */ }
// {/*       component={ChestExercises} */ }
// {/*       options={{ title: "Chest Exercises" }} */ }
// {/*     /> */ }
// {/*     <Stack.Screen */ }
// {/*       name="ShoulderExercises" */ }
// {/*       component={ShoulderExercises} */ }
// {/*       options={{ title: "Shoulder Exercises" }} */ }
// {/*     /> */ }
// {/*     <Stack.Screen */ }
// {/*       name="BackExercises" */ }
// {/*       component={BackExercises} */ }
// {/*       options={{ title: "Back Exercises" }} */ }
// {/*     /> */ }
// {/*     <Stack.Screen */ }
// {/*       name="CoreExercises" */ }
// {/*       component={CoreExercises} */ }
// {/*       options={{ title: "Core Exercises" }} */ }
// {/*     /> */ }
// {/*     <Stack.Screen */ }
// {/*       name="LegExercises" */ }
// {/*       component={LegExercises} */ }
// {/*       options={{ title: "Leg Exercises" }} */ }
// {/*     /> */ }
// {/*   </Stack.Navigator> */ }
// {/* </NavigationContainer> */ }
//   );
// }
