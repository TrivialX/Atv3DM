import * as React from 'react';
import { Button, View, Text } from 'react-native';



function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Contador"
        onPress={() => navigation.navigate('Contador')}
      />
      <Button
        title="ColorList"
        onPress={() => navigation.navigate('ColorList')}
      />
      <Button
        title="Calcular Média"
        onPress={() => navigation.navigate('Calcular Media')}
      />
    </View>
  );
}

export default HomeScreen;

