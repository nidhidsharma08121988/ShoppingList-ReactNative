import React, {useState} from 'react';
import {TouchableOpacity, View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import uuid from 'react-native-uuid';
const AddForm = ({addItem}) => {
  const [text, setText] = useState('');
  const handlePress = () => {
    addItem({id: uuid.v4(), text: text});
    setText('');
  };
  return (
    <TouchableOpacity style={styles.addForm}>
      <View style={styles.addFormView}>
        <TextInput
          testID="text-input"
          style={styles.textInput}
          value={text}
          onChangeText={setText}
        />
        <Icon
          name="plus"
          size={20}
          color="blue"
          testID="add-icon"
          onPress={handlePress}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addForm: {
    backgroundColor: 'smokewhite',
    margin:1,
    padding: 14,
    
  },
  addFormView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 20,
    fontWeight: '500',
    borderRadius: 10,
    borderColor:'grey',
    borderWidth:1,
    minWidth:260,
  },
});

export default AddForm;
