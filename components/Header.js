import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Shopping List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height:60,
    padding:0,
    margin:1,
    backgroundColor: 'darkslateblue',
    justifyContent: 'center',
    alignItems:'center'
  },
  title: {
    marginTop: 0,
    paddingVertical: 5,
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default Header