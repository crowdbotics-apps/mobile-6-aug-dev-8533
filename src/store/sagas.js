import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* newplugin611_get__readWorker(action) {
  try {
    const result = yield call(apiService.newplugin611_get__read, action)
    yield put(actions.newplugin611_get__readSucceeded(result))
  } catch (err) {
    yield put(actions.newplugin611_get__readFailed(err))
  }
}
function* newplugin611_get__readWatcher() {
  yield takeEvery(types.NEWPLUGIN611_GET__READ, newplugin611_get__readWorker)
}
export default function* rootSaga() {
  const sagas = [newplugin611_get__readWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
