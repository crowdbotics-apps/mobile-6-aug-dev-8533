import * as types from "./constants"
export const newplugin611_get__read = new_param => ({
  type: types.NEWPLUGIN611_GET__READ,
  new_param
})
export const newplugin611_get__readSucceeded = response => ({
  type: types.NEWPLUGIN611_GET__READ_SUCCEEDED,
  response
})
export const newplugin611_get__readFailed = error => ({
  type: types.NEWPLUGIN611_GET__READ_FAILED,
  error
})
