import { all, select, put, takeLatest } from "redux-saga/effects"; 
import { 
  incrementPaginationSuccess,
  incrementPaginationFailure,
  decrementPaginationSuccess,
  decrementPaginationFailure
} from '../../actions/paginationActions/paginationActions' 
import { paginationDecrementTypes, paginationIncrementTypes } from "../../actionsTypes/paginationTypes";
import { IPagination } from "../../../models/IPagination";

const getCurrentPage= (state: IPagination) => state.pagination.currentPage

function* incrementPaginationSaga() {
  try { 
     let currentPage: number = yield select(getCurrentPage); 
     const nextPage = currentPage + 1 

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
     const prevPage = currentPage - 1 

    yield put(
      decrementPaginationSuccess({currentPage: prevPage})
    );
  } catch (e: any) {
    yield put(
      decrementPaginationFailure({
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
