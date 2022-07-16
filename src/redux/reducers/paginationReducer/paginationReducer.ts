import { paginationTypes } from "../../actionsTypes/paginationTypes";
import { PaginationActions, PaginationState } from "../../types/types";

const initialState: PaginationState = {
  pending: false,
  currentPage: 1,
  itemsPerPage: 3,
  error: null,
};

export default (state = initialState, action: PaginationActions) => {
  switch (action.type) {
    case paginationTypes.INCREMENT_PAGINATION_ACTION:
      return {
        ...state,
        pending: true,
      };
    case paginationTypes.INCREMENT_PAGINATION_SUCCESS:
      return {
        ...state,
        pending: false,
        currentPage: action.payload.currentPage,
        itemsPerPage: 3,
        error: null,
      };
    case paginationTypes.INCREMENT_PAGINATION_FAILURE:
      return {
        ...state,
        pending: false,
        currentPage: null,
        itemsPerPage: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
