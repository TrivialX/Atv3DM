import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Form } from "./src/components/Form/Entradas";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E6F7FF',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Form />
    </View>
  );
}

