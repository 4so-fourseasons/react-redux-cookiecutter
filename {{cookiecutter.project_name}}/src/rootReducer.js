// @flow

import { combineReducers } from 'redux-loop'

import { fakeUserReducer } from 'containers/FakeUser/ducks/reducers.js'

export default combineReducers({
  fakeUser: fakeUserReducer
})
