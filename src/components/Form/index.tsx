import React from "react";
import { TextInput, View, Text } from "react-native";

import { styles } from "./Entradas/css";

interface FormInputProps {
  text: string;
  handleNumber: (newNumber: number) => void;
}

export function FormInput({ text, handleNumber }: FormInputProps) {
  return (
    <View style={styles.container}>
      <View style={styles.containerDiv}>
        <Text style={styles.text}>  {text} Número</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="decimal-pad"
          onChangeText={(inputText) => handleNumber(parseFloat(inputText))}
        ></TextInput>
      </View>
    </View>
  );
}

