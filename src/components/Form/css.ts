import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 12,
    top: getStatusBarHeight() - 30,
  },
  containerDiv: {
    alignItems: "center",
    gap: 6,
    marginTop: 20,
  },
  Text: {
    fontSize: 24, 
    marginTop: 20, 
    textAlign: 'center',
  },

});
