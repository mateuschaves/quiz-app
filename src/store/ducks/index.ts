import { combineReducers } from 'redux';

import { questionsReducer as questions } from './Question/Questions';

const reducers = combineReducers({
  questions,
});

export default reducers;
