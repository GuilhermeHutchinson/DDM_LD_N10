import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Tasks from './components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
    
      {/*Titulo principal do Gestor de Tarefas*/}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>

      
    <View style={styles.items}>
      {/*Aqui vão ficas as tarefas a a fazer */}
      <Tasks text={'Task 1'} />
      <Tasks text={'Task 2'} />
      <Tasks text={'Task 3'} />
      <Tasks text={'Task 4'} />
      <Tasks text={'Task 5'} />

    </View>
    
      <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  }
});
