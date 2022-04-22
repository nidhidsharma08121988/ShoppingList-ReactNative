import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item}) => {
  return 
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: 'smokewhite',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default ListItem;
