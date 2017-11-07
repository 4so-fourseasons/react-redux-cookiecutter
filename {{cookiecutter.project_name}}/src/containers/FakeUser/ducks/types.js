// @flow

export type User = {
  +id: string,
  +name: string,
  +age: number
}

export type State = {
  +loading: boolean,
  +user: ?User,
  +error: ?Object
}

export type Init = {| type: 'INIT' |}
export type UserFetchSuccess = {| type: 'USER_FETCH_SUCCESS', payload: User |}
export type UserFetchFail = {| type: 'USER_FETCH_FAIL', payload: Object |}

export type Action = Init | UserFetchSuccess | UserFetchFail
