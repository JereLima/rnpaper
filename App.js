import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import HeaderComponent from './src/components/Header'; 
import TextInputComponent from './src/components/TextInput';
import SpacingComponent from './src/components/Spacing';
import CardComponent from './src/components/Card';


export default function App() {
  return (
    <PaperProvider >
      <SafeAreaView for style={styles.container}>
        <HeaderComponent />
        <SpacingComponent />
        <TextInputComponent mode="outlined" label="input outlined" />
        <SpacingComponent />
        <TextInputComponent mode="flat"label="input flat" />
        <SpacingComponent />
        <CardComponent />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
  },
});
