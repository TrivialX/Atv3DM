import React, { useEffect, useState } from "react";
import { Text, View, TextInput, Button, Vibration } from "react-native";
import { styles } from "./css";

interface FormInputProps {
  text: string;
  handleNumber: (newNumber: number) => void;
}

export function FormInput({ text, handleNumber }: FormInputProps) {
  return (

      <View style={styles.containerDiv2}>
        <Text style={styles.text}>  {text} Número</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="decimal-pad"
          onChangeText={(inputText) => handleNumber(parseFloat(inputText))}
        />
      </View>

  );
}

export default Form;

export function Form() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [med, setMed] = useState<string>("");

  useEffect(() => {
    if (!isNaN(num1) && !isNaN(num2)) {
      Vibration.vibrate();
      const calcM = (num1 + num2) / 2;
      setMed(`Média: ${calcM.toFixed(2)}`);
    } else {
      setMed("Insira valores válidos");
    }
  }, [num1, num2]);

  return (
    <View style={styles.container}>
      <FormInput text="Primeiro" handleNumber={setNum1} />
      <FormInput text="Segundo" handleNumber={setNum2} />

      <Text style={styles.result}>{med}</Text>
    </View>
  );
}
