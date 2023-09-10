import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Form } from "./src/components/Form/CalcMedia";
import Contador from "./src/components/Form/Contador"; 
import HomeScreen from "./src/components/Form/Home";
import ColorList from "./src/components/Form/ColorSort";
import RandomImage from "./src/components/Form/RandomImage";
import ConsuAPI from "./src/components/Form/ConsuAPI";


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Calcular Media" component={Form} />
          <Stack.Screen name="Contador" component={Contador} />
          <Stack.Screen name="RandomImage" component={RandomImage} />
          <Stack.Screen name="ColorList" component={ColorList} />
          <Stack.Screen name="ConsuAPI" component={ConsuAPI} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}