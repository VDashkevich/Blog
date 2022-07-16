import { all, fork } from "redux-saga/effects";
import postsSaga from "./postSagas/postSagas"
import paginationSaga from './paginationSaga/paginationSagas'

export const  API_ROOT = 'https://api.spaceflightnewsapi.net/v3'

export function* rootSaga() {
  yield all([fork(postsSaga)]);
  yield all([fork(paginationSaga)]);
}
