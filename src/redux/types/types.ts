import { IPost } from "../../models/IPost"; 
import { postTypes } from "../actionsTypes/postsTypes";
import { paginationTypes } from '../actionsTypes/paginationTypes';

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
  
  export interface FetchPaginationRequest {
    type: typeof paginationTypes.INCREMENT_PAGINATION_ACTION;
  }
  
  export type FetchPaginationSuccess = {
    type: typeof paginationTypes.INCREMENT_PAGINATION_SUCCESS;
    payload: FetchPaginationSuccessPayload;
  };
  
  export type FetchPaginationFailure = {
    type: typeof paginationTypes.INCREMENT_PAGINATION_FAILURE;
    payload: FetchPaginationFailurePayload;
  };

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure;


  export type PaginationActions =
  | FetchPaginationRequest
  | FetchPaginationSuccess
  | FetchPaginationFailure;