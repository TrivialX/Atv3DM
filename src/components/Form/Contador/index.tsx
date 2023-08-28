import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Contador() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Incrementar"
        onPress={() => setCounter(counter + 1)}
      />
      <Text>Contador: {counter}</Text>
    </View>
  );
}
