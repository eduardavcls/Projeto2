import { View, FlatList,  Image } from "react-native";
import CardComida from "../components/CardComida.js";


const Pratos = [
  {
    id: "1",
    nome: "Caldeirada de frutos do mar",
    foto: require("../../img/caldeirada.jpeg"),
    descricao:
      "Caldeirada é uma sopa tradicional portuguesa que combina diversos tipos de peixes e frutos do mar, cozidos em uma base de tomates, cebolas, pimentões, alho e ervas. É um prato robusto e reconfortante, refletindo a rica herança marítima de Portugal.",
  },
  {
    id: "1",
    nome: "Espaguete com camarões",
    foto: require("../../img//espagueti.jpg"),
    descricao:
      "Espaguete com camarões é uma combinação deliciosa de macarrão espaguete com camarões suculentos, normalmente salteados em alho, azeite e ervas, e misturados em um molho leve, muitas vezes à base de tomate ou vinho branco. É um prato rápido, saboroso e sofisticado.",
  },
  {
    id: "2",
    nome: "Paella",
    foto: require("../../img/paella.jpeg"),
    descricao:
      "Paella é um prato espanhol de arroz cozido com açafrão, frutos do mar, carne e vegetais, tudo numa única panela. É um prato tradicional e saboroso de Valência.",
  },
  {
    id: "3",
    nome: "Risoto de frutos do mar",
    foto: require("../../img/risoto.jpeg"),
    descricao:
      "Risoto de frutos do mar é um prato italiano de arroz cozido lentamente com caldo de peixe, misturado com camarões, lulas, mexilhões e outros frutos do mar. É cremoso, saboroso e cheio de sabores do mar. ",
  }]
 
export default function Comida() {
    return (
        <View>
            <FlatList
                data={Pratos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CardComida comida={item}/>
                )}
            />
        </View>
    )}