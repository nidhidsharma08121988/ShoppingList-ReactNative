import React from 'react'
import {Text} from 'react-native'

const ListItem = ({item}) => {
  return (
    <Text>{item.text}</Text>
  )
}

export default ListItem