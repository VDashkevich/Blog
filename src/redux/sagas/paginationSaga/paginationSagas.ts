import { all, select, put, takeLatest, call} from "redux-saga/effects"; 
import axios from "axios";
import { 
  incrementPaginationSuccess,
  incrementPaginationFailure,
  decrementPaginationSuccess,
  decrementPaginationFailure
} from '../../actions/paginationActions/paginationActions' 
import { paginationDecrementTypes, paginationIncrementTypes } from "../../actionsTypes/paginationTypes";
import { IPost } from "../../../models/IPost";
import { API_ROOT } from '../rootSaga'

import { IPagination } from "../../../models/IPagination";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
} from "../../actions/postsActions/postsActions";

const getCurrentPage= (state: IPagination) => state.pagination.currentPage
const getItemsPerPage = (state: IPagination) => state.pagination.itemsPerPage


export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

function* incrementPaginationSaga() {
  try { 
     let currentPage: number = yield select(getCurrentPage); 
    let itemsPerPage: number = yield select(getItemsPerPage);
    const getPosts = () =>
    axios.get<IPost[]>(`${API_ROOT}/blogs?_limit=${itemsPerPage}&_start=${itemsPerPage*currentPage+1}`);
    const response: ResponseGenerator = yield call(getPosts); 
     const nextPage = currentPage + 1 

     yield put(
      fetchPostsSuccess({
        posts: response.data,
      })
    );
    yield put(
      incrementPaginationSuccess({currentPage: nextPage})
    );
  } catch (e: any) {
    yield put(
      incrementPaginationFailure({
        error: e.message
      })
    );
  }
}

function* decrementPaginationSaga() {
  try { 
    let currentPage: number = yield select(getCurrentPage); 
   let itemsPerPage: number = yield select(getItemsPerPage);
   const getPosts = () =>
   axios.get<IPost[]>(`${API_ROOT}/blogs?_limit=${itemsPerPage}&_start=${(itemsPerPage*currentPage)-itemsPerPage}`);
   const response: ResponseGenerator = yield call(getPosts); 
    const prevPage = currentPage - 1 

    yield put(
     fetchPostsSuccess({
       posts: response.data,
     })
   );
   yield put(
    decrementPaginationSuccess({currentPage: prevPage})
   );
 } catch (e: any) {
   yield put(
     incrementPaginationFailure({
       error: e.message
     })
   );
 } 
}

function* paginationSaga() {
  yield all([takeLatest(paginationIncrementTypes.INCREMENT_PAGINATION_ACTION, incrementPaginationSaga)]);
  yield all([takeLatest(paginationDecrementTypes.DECREMENT_PAGINATION_ACTION, decrementPaginationSaga)]);
}

export default paginationSaga;
