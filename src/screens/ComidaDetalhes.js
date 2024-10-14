
import { Text, View, Image,  StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import Comida from './Comida';

export default function ComidaDetalhes() {
    const route = useRoute();
    const {comida} = route.params || {};
    return (
      <View style={styles.caixa}>
        <Text style={styles.detalhe}>Detalhes dos Pratos</Text>
        <Image source={comida.foto} style={styles.imagem} />
        <Text style={styles.nome}>Nome do prato: {comida.nome}</Text>
        <Text style={styles.descricao}>Descrição do prato: {comida.descricao}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    
    caixa: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    detalhe: {
      fontSize: 30,
      marginBottom: 20,
      color: 'black',
      fontWeight: 'bold',
    },
    descricao: {
      marginTop: 10,
      marginBottom: 20,
      fontSize: 20,
      color: 'black',
      backgroundColor: 'gray',
      padding: 10,
      borderRadius: 10
    },
    nome: {
      marginTop: 10,
      marginBottom: 20,
      fontSize: 26,
      color: 'black',
    },
    imagem: {
      width: 200,
      height: 200,
      marginBottom: 20,
      borderRadius: 100,
    }
   
   
})