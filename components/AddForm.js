import React, {useState} from 'react';
import {TouchableOpacity, View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddForm = () => {
  const [text, setText] = useState('');
  return (
    <TouchableOpacity style={styles.addForm}>
      <View style={styles.addFormView}>
        <TextInput
          testID="text-input"
          style={styles.textInput}
          value={text}
          onChangeText={setText}
        />
        <Icon name="plus" size={20} color="blue" testID="add-icon" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addForm: {
    backgroundColor: 'grey',
  },
  addFormView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default AddForm;
