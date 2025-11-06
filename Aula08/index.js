import React, { useState } from 'react';
// Importamos os componentes que vamos usar
import { View, Button, Image, StyleSheet, SafeAreaView, Text } from 'react-native';
// Importamos a biblioteca que acabamos de instalar
import * as ImagePicker from 'expo-image-picker';

// Esta é a tela principal do nosso app
export default function PerfilUsuarioScreen() {
  
  // 1. Estado para guardar a URI da imagem
  // Começa como 'null' (nenhuma imagem selecionada)
  const [imagem, setImagem] = useState(null); 

  // URL de um avatar genérico/padrão 
  const avatarGenerico = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  // 2. Função para abrir a câmera
  async function abrirCamera() {
    // Pede para abrir a câmera [cite: 40]
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Permite editar (cortar) a foto [cite: 42, 50]
      quality: 0.7,        // Qualidade da imagem [cite: 41]
    });

    // Se o usuário não cancelou
    if (!result.canceled) {
      // Atualiza o estado 'imagem' com a URI da foto tirada [cite: 46, 66]
      setImagem(result.assets[0].uri);
    }
  }

  // 3. Função para abrir a galeria
  async function abrirGaleria() {
    // Pede para abrir a biblioteca de imagens [cite: 50]
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true, // Permite editar [cite: 50]
    }); 

    // Se o usuário não cancelou
    if (!result.canceled) { 
      // Atualiza o estado 'imagem' com a URI da foto escolhida [cite: 53, 73]
      setImagem(result.assets[0].uri);
    }
  }

  // 4. Renderização (Interface que o usuário vê)
  return (
    // SafeAreaView evita que o conteúdo fique atrás do 'notch' da câmera
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meu Perfil</Text>
      
      {/* Componente de Imagem  */}
      <Image
        // A fonte da imagem:
        // Se 'imagem' (estado) NÃO for nula, usa a URI do estado.
        // Se 'imagem' (estado) FOR nula, usa a URI do 'avatarGenerico'.
        source={{ uri: imagem ? imagem : avatarGenerico }}
        style={styles.avatar} // Estilo redondo [cite: 104]
      />

      {/* Botões */}
      <View style={styles.buttonContainer}>
        <Button title="Tirar Foto" onPress={abrirCamera} /> [cite: 76, 100]
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Escolher da Galeria" onPress={abrirGaleria} /> [cite: 77, 100]
      </View>
    </SafeAreaView>
  );
}

// 5. Estilos (CSS do React Native) [cite: 84]
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    backgroundColor: '#f5f5f5', // Cor de fundo
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Estilo do avatar pedido na atividade [cite: 104]
  avatar: {
    width: 150,           // [cite: 108]
    height: 150,          // [cite: 109]
    borderRadius: 75,     // Metade da largura/altura para ser um círculo [cite: 110]
    marginBottom: 30,     
    borderWidth: 3,
    borderColor: '#ddd',
  },
  buttonContainer: {
    width: '80%',       // Largura do botão
    marginVertical: 10, // Espaço entre os botões
  },
});