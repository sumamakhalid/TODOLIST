import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import TodoItem from '../components/TodoItem';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
  const [todos, setTodos] = useState([]);
  const navigation = useNavigation();

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <View style={styles.container}>
   {todos.length === 0 ? (
  <View style={styles.empty}>
    <Image source={require('../assets/Todo.png')} style={styles.image} />
    <Text style={styles.emptyText}>Todos you add will appear here</Text>
  </View>
) : (
  <FlatList
    data={todos}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => <TodoItem todo={item} />}
  />
)}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddTodo', { addTodo: handleAddTodo })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
    empty: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  addButton: {
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 10,
    position: 'absolute',
    bottom: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
     paddingVertical: 10,
    paddingHorizontal: 20,
  },
  emptyText : {
    color : '#808080'
  },
    image: {
    width: 400,
    height: 400,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  addButtonText: { 
    color: 'white',
    fontSize: 30, 
    },
});
