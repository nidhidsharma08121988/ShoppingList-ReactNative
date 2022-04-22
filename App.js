import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Cookies'},
    {id: uuid.v4(), text: 'Notebook'},
    {id: uuid.v4(), text: 'Pencils'},
    {id: uuid.v4(), text: 'DishWash liquid'},
  ]);

  const renderItem = ({item}) => <ListItem item={item} deleteItem={deleteItem}/>;

  const deleteItem = id => {
    const newListItems = items.filter(item => item.id !== id);
    setItems(newListItems);
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={renderItem} deleteItem={deleteItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
