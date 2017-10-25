// @flow

// Styles
import 'normalize.css'
import './global-styles'
import './sass/main.scss'

// Modules
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import App from 'App'
import configureStore from 'store'

const rootElement = document.getElementById('root')
const initialState = {}
const store = configureStore(initialState)

const render = (Component) => {
  return ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootElement
  )
}

render(App)

if (module.hot) {
  // $FlowFixMe
  module.hot.accept('App', () => render(App))
}
