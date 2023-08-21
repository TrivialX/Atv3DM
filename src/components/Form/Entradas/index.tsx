import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./css";
import { FormInput } from "..";


export function Form() {
  const [num1, setnum1] = useState<number>(0);
  const [num2, setnum2] = useState<number>(0);
  const [med, setmed] = useState<string>("");

  useEffect(() => {
    if (!isNaN(num1) && !isNaN(num2)) {
      const calcM = (num1 + num2) / 2;
      setmed(`Média: ${calcM.toFixed(2)}`);
    } else {
      setmed("Insira valores validos");
    }
  }, [num1, num2]);

  return (
    <View style={styles.container}>
    <FormInput text="Primeiro" handleNumber={setnum1} />
    <FormInput text="Segundo" handleNumber={setnum2} />

    <Text style={styles.result}>{med}</Text>
  </View>
);
}
