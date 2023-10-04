import React from 'react'
import Navigation from './src/config/Navigation'
import { api } from './src/utils/api'

api('/latest?base=USD')
  .then(response => console.log('response', response))
  .catch(error => console.log('error', error))

export default () => <Navigation />
