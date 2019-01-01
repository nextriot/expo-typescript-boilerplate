import * as React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Sentry from 'sentry-expo'
import { config } from './config'

Sentry.enableInExpoDevelopment = true
Sentry.config(config.sentry.dsn).install()

export default () => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hi Expo!</Text>
    </View>
  </SafeAreaView>
)
