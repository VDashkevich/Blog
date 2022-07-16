import { combineReducers } from "redux";
import postReducer from "./postsReducer/postsReducer";
import paginationReducer from "./paginationReducer/paginationReducer"

const rootReducer = combineReducers({
  posts: postReducer,
  pagination: paginationReducer, 
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
