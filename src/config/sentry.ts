import {
  SENTRY_AUTH_TOKEN,
  SENTRY_DSN,
  SENTRY_ORG_NAME,
  SENTRY_PROJECT_NAME
} from 'react-native-dotenv'

const sentry = Object.freeze({
  token: (SENTRY_AUTH_TOKEN as string) || '',
  dsn: (SENTRY_DSN as string) || '',
  organization: (SENTRY_ORG_NAME as string) || '',
  project: (SENTRY_PROJECT_NAME as string) || ''
})

export default sentry
