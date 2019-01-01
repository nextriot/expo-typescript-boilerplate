declare module 'sentry-expo' {
  import Sentry from 'react-native-sentry'
  class SentryExpo extends Sentry {
    public static enableInExpoDevelopment: boolean
  }
  export default SentryExpo
}
