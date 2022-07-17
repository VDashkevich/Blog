import axios from "axios";
import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { IPost } from "../../../models/IPost";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  fetchPostByIdFailure,
  fetchPostByIdSuccess,
  fetchPostByIdRequest
} from "../../actions/postsActions/postsActions";
import { postTypes } from "../../actionsTypes/postsTypes";
import { API_ROOT } from "../rootSaga";
import { IPagination } from "../../../models/IPagination";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

const getItemsPerPage = (state: IPagination) => state.pagination.itemsPerPage;

function* fetchPostsSaga() {
  try {
    let itemsPerPage: number = yield select(getItemsPerPage);
    const getPosts = () =>
      axios.get<IPost[]>(`${API_ROOT}/blogs?_limit=${itemsPerPage}`);
    const response: ResponseGenerator = yield call(getPosts);

    yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    );
  } catch (e: any) {
    yield put(
      fetchPostsFailure({
        error: e.message,
      })
    );
  }
}

function* fetchPostByIdSaga(action:any) {
    try { 
      const getPost = (id: number) =>
        axios.get<IPost[]>(`${API_ROOT}/blogs/${id}`);

      const response: ResponseGenerator = yield call(getPost, action.id);

      yield put(
        fetchPostByIdSuccess({
            selectedPost: response.data,
        })
      );
    } catch (e: any) {
      yield put(
        fetchPostByIdFailure({
          error: e.message,
        })
      );
    }
  }

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)]);
  yield all([takeLatest(postTypes.FETCH_POST_BY_ID_REQUEST, fetchPostByIdSaga)]);
} 

export default postsSaga;