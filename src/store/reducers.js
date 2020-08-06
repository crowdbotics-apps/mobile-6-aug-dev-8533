import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.NEWPLUGIN611_GET__READ:
    case types.NEWPLUGIN611_GET__READ_SUCCEEDED:
    case types.NEWPLUGIN611_GET__READ_FAILED:
    default:
      return state
  }
}
