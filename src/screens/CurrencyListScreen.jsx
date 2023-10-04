import { useContext } from 'react'
import { FlatList, StatusBar, View, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import colors from '../constants/colors'
import currencies from '../data/currencies.json'
import { RowItem, RowSeparator } from '../components/RowItem'
import { ConversionContext } from '../utils/ConversionContext'

export default ({ navigation, route = {} }) => {
  const params = route.params || {}
  const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } =
    useContext(ConversionContext)

  return (
    <View style={{ backgroundColor: colors.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          // const selected = params.activeCurrency === item
          let selected = false
          if (params.isBaseCurrency && item === baseCurrency) {
            selected = true
          } else if (!params.isBaseCurrency && item === quoteCurrency) {
            selected = true
          }
          return (
            <RowItem
              text={item}
              onPress={() => {
                if (params.isBaseCurrency) {
                  setBaseCurrency(item)
                } else {
                  setQuoteCurrency(item)
                }
                navigation.pop()
              }}
              rightIcon={
                selected && (
                  <View style={styles.icon}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          )
        }}
        keyExtractor={item => item}
        ItemSeparatorComponent={() => <RowSeparator />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: colors.blue,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
