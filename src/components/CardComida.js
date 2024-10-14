import { Text, TouchableOpacity, StyleSheet,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardComida({ comida }) {
    const navigation = useNavigation();
    
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detalhes dos Pratos", { comida })}
      style={styles.comida}
    >
      <Image source={comida.foto} style={styles.image} />
      <Text style={styles.foto}>{comida.foto}</Text>
      <Text style={comida.nome}></Text>
      <Text style={comida.descricao}></Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   
    
  comida: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    backgroundColor: "lightgreen",
    
  },
  foto: {
    fontSize: 0,
    marginRight: 15,
    
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 5,
    
  },
  descricao:{
    fontSize:20,
    color: 'black'
  }
})