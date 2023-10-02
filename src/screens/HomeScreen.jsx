import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native'
import { format } from 'date-fns'
import { ConversionInput } from '../components/ConversionInput'

import colors from '../constants/colors'
import { Button } from '../components/Button'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
    resizeMode: 'contain',
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
    resizeMode: 'contain',
  },
  textHeader: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 30,
    marginVertical: 20,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 13,
    textAlign: 'center',
  },
})

export default () => {
  const baseCurrency = 'USD'
  const quoteCurrency = 'GBP'
  const conversionRate = 0.8345
  const date = new Date()

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/background.png')}
          style={styles.logoBackground}
        />
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <Text style={styles.textHeader}>Currency Converter</Text>

      <ConversionInput
        text={baseCurrency}
        value="123"
        onPress={() => alert('todo!')}
        onChange={text => console.log('text', text)}
        keyboardType="numeric"
      />
      <ConversionInput
        text="GBP"
        value={quoteCurrency}
        onPress={() => alert('todo!')}
        onChange={text => console.log('text', text)}
        keyboardType="numeric"
        editable={false}
      />

      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
          new Date(date),
          'MMM do, yyyy'
        )}`}
      </Text>
      <Button text="Reverse Currencies" onPress={() => alert('todo!')} />
    </View>
  )
}
