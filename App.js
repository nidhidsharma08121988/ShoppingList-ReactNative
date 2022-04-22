import React,{useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header'


const App = () => {
  const [items,setItems] = useState([
  {id:uuid.v4(),text:'Milk'},
  {id:uuid.v4(),text:'Cookies'},
  {id:uuid.v4(),text:'Notebook'},
  {id:uuid.v4(),text:'Pencils'},
  {id:uuid.v4(),text:'Dishwash liquid'}
  ])

  const renderItem=({item})=>(<Text>{item.text}</Text>)
  
  return (
    <View style={styles.container}>
     <Header/>
      <FlatList data={items} renderItem={renderItem}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App;
