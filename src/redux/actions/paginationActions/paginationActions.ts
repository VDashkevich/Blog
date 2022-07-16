import { paginationDecrementTypes, paginationIncrementTypes } from "../../actionsTypes/paginationTypes";
import {
  FetchPaginationIncrementRequest,
  | FetchPaginationIncrementSuccess,
  | FetchPaginationIncrementFailure,
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

export const decrementPaginationActions = (): FetchPaginationRequest => ({
  type: paginationTypes.INCREMENT_PAGINATION_ACTION,
});

export const decrementPaginationSuccess = (
  payload: FetchPaginationSuccessPayload
): FetchPaginationSuccess => ({
  type: paginationTypes.INCREMENT_PAGINATION_SUCCESS,
  payload,
});

export const decrementPaginationFailure = (
  payload: FetchPaginationFailurePayload
): FetchPaginationFailure => ({
  type: paginationTypes.INCREMENT_PAGINATION_FAILURE,
  payload,
});
