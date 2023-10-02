import React from 'react'
import { ScrollView, View, Linking, Alert } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import colors from '../constants/colors'
import { RowItem, RowSeparator } from '../components/RowItem'

const openUrl = url => {
  return Linking.openURL(url).catch(() => {
    Alert.alert('Sorry, something went wrong', 'Please, try again later')
  })
}

export default () => {
  return (
    <View style={{ paddingVertical: 30, flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          onPress={() => openUrl('https:/learn.javascript.ru')}
        />
        <RowSeparator />
        <RowItem
          text="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openUrl('https://reactnative.dev/')}
        />
        <RowSeparator />
        <RowItem
          text="React Native by Example"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => alert('Todo!')}
        />
      </ScrollView>
    </View>
  )
}
