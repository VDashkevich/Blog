import { paginationDecrementTypes, paginationIncrementTypes } from "../../actionsTypes/paginationTypes";
import {
  FetchPaginationIncrementRequest,
  FetchPaginationIncrementSuccess,
  FetchPaginationIncrementFailure,
  FetchPaginationDecrementRequest,
  FetchPaginationDecrementSuccess,
  FetchPaginationDecrementFailure,
  FetchPaginationFailurePayload,
  FetchPaginationSuccessPayload,
} from "../../types/types";

export const incrementPaginationActions = (): FetchPaginationIncrementRequest => ({
  type: paginationIncrementTypes.INCREMENT_PAGINATION_ACTION,
});

export const incrementPaginationSuccess = (
  payload: FetchPaginationSuccessPayload
): FetchPaginationIncrementSuccess => ({
  type: paginationIncrementTypes.INCREMENT_PAGINATION_SUCCESS,
  payload,
});

export const incrementPaginationFailure = (
  payload: FetchPaginationFailurePayload
): FetchPaginationIncrementFailure => ({
  type: paginationIncrementTypes.INCREMENT_PAGINATION_FAILURE,
  payload,
});

export const decrementPaginationActions = (): FetchPaginationDecrementRequest => ({
  type: paginationDecrementTypes.DECREMENT_PAGINATION_ACTION,
});

export const decrementPaginationSuccess = (
  payload: FetchPaginationSuccessPayload
): FetchPaginationDecrementSuccess => ({
  type: paginationDecrementTypes.DECREMENT_PAGINATION_SUCCESS,
  payload,
});

export const decrementPaginationFailure = (
  payload: FetchPaginationFailurePayload
): FetchPaginationDecrementFailure => ({
  type: paginationDecrementTypes.DECREMENT_PAGINATION_FAILURE,
  payload,
});
