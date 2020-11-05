import { put, call, takeEvery } from "redux-saga/effects";

import {
  fetchPosts,
  GET_POSTS,
  getPostsSuccess,
  getPostsFailure,
} from "../actions/postsActions";

export function* handlePostsLoad() {
  try {
    const posts = yield call(fetchPosts);
    yield put(getPostsSuccess(posts));
  } catch (error) {
    yield put(getPostsFailure());
  }
}

export default function* watchPostsLoad() {
  yield takeEvery(GET_POSTS, handlePostsLoad);
}
