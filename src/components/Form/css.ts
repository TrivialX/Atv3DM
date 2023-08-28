import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerDiv: {
    alignItems: "center",
    gap: 6,
    marginTop: 20,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
