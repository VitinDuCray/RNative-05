import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ImageBackground 
      source={{ uri: 'https://easycdn.es/1/series/capi/capitulo_115482.jpg' }} 
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>Bem-vindo ao colégio Raimon! ⚡</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: '#347aeb',
    padding: 20,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: '#ebc634',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
