const env = process.env.NODE_ENV

export const IS_DEVELOPMENT_ENV = env === "development"

export const IS_PRODUCTION_ENV = env === "production"

export const IS_TEST_ENV = env === "test"

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export const SECURE_PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

export const CURADORIA_URL = "https://nossovoto.com.br/curadoria"

export const FACEBOOK_APP_ID = "674147143115564"
