import { all, select, put, takeLatest } from "redux-saga/effects"; 
import { 
  incrementPaginationSuccess,
  incrementPaginationFailure
} from '../../actions/paginationActions/paginationActions' 
import { paginationTypes } from "../../actionsTypes/paginationTypes";
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

function* paginationSaga() {
  yield all([takeLatest(paginationTypes.INCREMENT_PAGINATION_ACTION, incrementPaginationSaga)]);
}

export default paginationSaga;
