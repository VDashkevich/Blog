import { IPost } from "../../models/IPost";
import { postTypes } from "../actionsTypes/postsTypes";
import {
  paginationIncrementTypes,
  paginationDecrementTypes,
} from "../actionsTypes/paginationTypes";

export interface PostsState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface PaginationState {
  pending: boolean;
  currentPage: number;
  itemsPerPage: number;
  error: string | null;
}

export interface FetchPostsSuccessPayload {
  posts: IPost[];
}

export interface FetchPostsFailurePayload {
  error: string;
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST;
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS;
  payload: FetchPostsSuccessPayload;
};

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE;
  payload: FetchPostsFailurePayload;
};

export interface FetchPaginationSuccessPayload {
  currentPage: number;
}

export interface FetchPaginationFailurePayload {
  error: string;
}

export interface FetchPaginationIncrementRequest {
  type: typeof paginationIncrementTypes.INCREMENT_PAGINATION_ACTION;
}

export type FetchPaginationIncrementSuccess = {
  type: typeof paginationIncrementTypes.INCREMENT_PAGINATION_SUCCESS;
  payload: FetchPaginationSuccessPayload;
};
export type FetchPaginationIncrementFailure = {
  type: typeof paginationIncrementTypes.INCREMENT_PAGINATION_FAILURE;
  payload: FetchPaginationFailurePayload;
};


export interface FetchPaginationDecrementRequest {
  type: typeof paginationDecrementTypes.DECREMENT_PAGINATION_ACTION;
}

export type FetchPaginationDecrementSuccess = {
  type: typeof paginationDecrementTypes.DECREMENT_PAGINATION_SUCCESS;
  payload: FetchPaginationSuccessPayload;
};
export type FetchPaginationDecrementFailure = {
  type: typeof paginationDecrementTypes.DECREMENT_PAGINATION_FAILURE;
  payload: FetchPaginationFailurePayload;
};

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;

export type PaginationIncrementActions =
  | FetchPaginationIncrementRequest
  | FetchPaginationIncrementSuccess
  | FetchPaginationIncrementFailure

  export type PaginationDecrementActions =
  FetchPaginationDecrementRequest |
  FetchPaginationDecrementSuccess |
  FetchPaginationDecrementFailure;
