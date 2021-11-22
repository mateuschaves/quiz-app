import { all } from 'redux-saga/effects';

import { watchFetchQuestions } from './Question/Questions';

export default function* rootSaga() {
  yield all([
    watchFetchQuestions(),
  ]);
}
