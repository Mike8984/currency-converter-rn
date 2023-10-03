import React from 'react'
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import colors from '../constants/colors'

export const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        style={styles.buttonIcon}
        source={require('../assets/images/reverse.png')}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
})
