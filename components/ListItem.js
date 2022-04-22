import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => (
  <TouchableOpacity style={styles.listItem}>
    <View style={styles.listItemView}>
      <Text style={styles.listItemText}>{item.text}</Text>
      <Icon
        testID="remove-icon"
        name="remove"
        color="red"
        size={20}
        onPress={() => deleteItem(item.id)}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
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
