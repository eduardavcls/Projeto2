import { StyleSheet, Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Comidas do mar</Text>
      <Image
        style={styles.img}
        source={require("../../img/seafood.jpg")}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cardápio")}
      >
        <Text style={styles.botao}>Ver informações sobre os pratos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: 'black',
    fontSize: 40,
    margin: 30,
     FontFace: 'Helvetica'
  },
  img: {
    height: '40%',
    width: '90%'
  },
  button: {
    margin: 18,
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 5,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    FontFace: 'Helvetica'
  },
  botao: {
    color: 'white',
    fontSize: 15,
  },
  
});