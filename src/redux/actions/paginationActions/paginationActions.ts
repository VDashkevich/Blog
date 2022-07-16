import { paginationTypes } from "../../actionsTypes/paginationTypes";
import {
  FetchPaginationFailure,
  FetchPaginationRequest,
  FetchPaginationSuccess,
  FetchPaginationFailurePayload,
  FetchPaginationSuccessPayload,
} from "../../types/types";

export const incrementPaginationActions = (): FetchPaginationRequest => ({
  type: paginationTypes.INCREMENT_PAGINATION_ACTION,
});

export const incrementPaginationSuccess = (
  payload: FetchPaginationSuccessPayload
): FetchPaginationSuccess => ({
  type: paginationTypes.INCREMENT_PAGINATION_SUCCESS,
  payload,
});

export const incrementPaginationFailure = (
  payload: FetchPaginationFailurePayload
): FetchPaginationFailure => ({
  type: paginationTypes.INCREMENT_PAGINATION_FAILURE,
  payload,
});
