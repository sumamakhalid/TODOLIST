import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import RNPickerSelect from 'react-native-picker-select';


export default function AddTodoScreen() {
  const [title, setTitle] = useState('');
  const [label, setLabel] = useState('');
  const [priority, setPriority] = useState('Low');

  const navigation = useNavigation();
  const route = useRoute();
  const { addTodo } = route.params;

  const handleDone = () => {
    if (!title || !label) {
      alert('Please enter a title and select a label');
      return;
    }

    const newTodo = {
      id: uuid.v4(),
      title,
      label,
      priority,
    };

    addTodo(newTodo);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>To-do</Text>
      <TextInput
        placeholder="What needs to be done?"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Label</Text>
      <RNPickerSelect
  onValueChange={(value) => setLabel(value)}
  placeholder={{ label: 'Select a label...', value: null }}
  items={[
    { label: 'Food', value: 'Food' },
    { label: 'Home', value: 'Home' },
    { label: 'Music', value: 'Music' },
  ]}
  style={pickerSelectStyles}
/>

      <Text style={styles.label}>Priority</Text>
      <View style={styles.priorityContainer}>
        {['Low', 'Medium', 'High'].map((p) => (
          <TouchableOpacity
            key={p}
            style={[
              styles.priorityButton,
              priority === p && styles.selectedPriority,
            ]}
            onPress={() => setPriority(p)}
          >
            <Text style={styles.priorityText}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity  onPress={handleDone}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  priorityButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: '#007bff',
    borderWidth: 1,
  },
  selectedPriority: {
    backgroundColor: '#007bff',
  },
  priorityText: {
    color: '#007bff',
  },
  
});
const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black',
    marginBottom: 10,
  },
};

