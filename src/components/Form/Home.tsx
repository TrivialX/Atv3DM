import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './css';

function HomeScreen({ navigation }: { navigation: any }) {
    return (
      <View style={styles.container}>
        <View style={styles.containerDiv}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contador')}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Contador</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ColorList')}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>ColorList</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RandomImage')}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>RandomImage</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Calcular Media')}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>Calcular Média</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ConsuAPI')}
            style={styles.buttonContainer}
          >
            <Text style={styles.buttonText}>ConsuAPI</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  export default HomeScreen;
