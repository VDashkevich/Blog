import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IPost } from "../../../models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess
} from "../../actions/postsActions/postsActions";
import { postTypes } from "../../actionsTypes/postsTypes";
import { API_ROOT } from '../rootSaga'

export interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

const getPosts = () =>
  axios.get<IPost[]>(`${API_ROOT}/blogs`);

function* fetchPostsSaga() {
  try {
    const response: ResponseGenerator = yield call(getPosts); 
    yield put(
      fetchPostsSuccess({
        posts: response.data
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message
      })
    );
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
}

export default postsSaga;
