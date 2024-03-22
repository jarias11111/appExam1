import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import Header from '../components/Header';

// Lista de materias para la carrera 1
const Productos = [
    { id: '1', nombre: 'Lap1' },
    { id: '2', nombre: 'Lap1' },
    { id: '3', nombre: 'Lap1' },
    { id: '4', nombre: 'Lap1' },
    { id: '5', nombre: 'Lap1' },
  ];
  
  // Lista de materias para la carrera 2
  const Categorias = [
    { id: '1', nombre: 'Computo1' },
    { id: '2', nombre: 'Computo1' },
    { id: '3', nombre: 'Computo1' },
    { id: '4', nombre: 'Computo1' },
    { id: '5', nombre: 'Computo1' },
  ];

// Componente funcional para un item de la lista
const ListItem = ({ nombre }) => (
    <View style={{ padding: 10 }}>
      <Text>{nombre}</Text>
    </View>
  );
  
  // Componente funcional para el FlatList
  const CustomFlatList = ({ data }) => {
    const renderItem = ({ item }) => <ListItem nombre={item.nombre} />;
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    );
  };    

const Inicio = () => {

const [claseSeleccionada, setClaseSeleccionada] = useState(1); 
const handleSeleccionClase = (carrera) => {
    setClaseSeleccionada(carrera);
};

  return (
    <View style={{ flex: 1 }}>
      <Header title="Mostrar listado de productos y categorías" />
      {/* Resto del contenido de la aplicación */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
        <Button title="Productos" onPress={() => handleSeleccionClase(1)} />
        <Button title="Categorias" onPress={() => handleSeleccionClase(2)} />
      </View>
      <CustomFlatList data={claseSeleccionada === 1 ? Productos : Categorias} />

    </View>
  );
};

export default Inicio;