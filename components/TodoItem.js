import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TodoItem({ todo }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.label}>{todo.label}</Text>
      <Text style={[styles.priority, { color: getColor(todo.priority) }]}>
        {todo.priority}
      </Text>
    </View>
  );
}

const getColor = (priority) => {
  switch (priority) {
    case 'High': return 'red';
    case 'Medium': return 'orange';
    case 'Low':
    default: return 'blue';
  }
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    marginBottom: 10,
  },
  title: { fontWeight: 'bold', fontSize: 16 },
  label: { fontSize: 14 },
  priority: { marginTop: 5, fontSize: 13 },
});
