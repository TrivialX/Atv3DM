import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { FormInput } from "..";


export function Form() {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [mean, setMean] = useState<string>("");

  useEffect(() => {
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const calculatedMean = (firstNumber + secondNumber) / 2;
      setMean(`Média: ${calculatedMean.toFixed(2)}`);
    } else {
      setMean("Insira valores validos");
    }
  }, [firstNumber, secondNumber]);

  return (
    <View style={styles.container}>
    <FormInput text="Primeiro" handleNumber={setFirstNumber} />
    <FormInput text="Segundo" handleNumber={setSecondNumber} />

    <Text style={styles.result}>{mean}</Text>
  </View>
);
}
