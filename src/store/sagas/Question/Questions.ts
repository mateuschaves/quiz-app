/* eslint-disable camelcase */
import { call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import uuid from 'react-native-uuid';

import { AnyAction } from 'redux';
import { FetchQuestionDto } from '~/@types/dto/question';

import { questionsActions, questionsTypes } from '~/store/ducks/Question/Questions';
import { QuestionService } from '~/services/api/resources';
import { Question } from '../../../@types/dto/question';
import { navigate } from '~/navigation/NavigationService';
import { Exam } from '~/@types/store/app.state';

interface fetchQuestionsSagaProps extends AnyAction {
    payload: FetchQuestionDto
}

interface fetchQuestionsResponse {
  response_code: number;
  results: Question[];
}

export function* fetchQuestionsSaga({ payload }: fetchQuestionsSagaProps) {
  try {
    const response: AxiosResponse<fetchQuestionsResponse> = yield call(QuestionService.fetchQuestions, payload);
    const exam: Exam = {
      questions: response.data.results,
      exam_id: uuid.v4().toString(),
      answers: [],
      score: 0,
      time: Date.now(),
    };

    yield put(questionsActions.fetchQuestionsSuccess(exam));
    yield navigate('Quiz', {});
  } catch (error: any) {
    yield put(questionsActions.fetchQuestionsError(error));
  }
}

export function* watchFetchQuestions() {
  yield takeLatest(questionsTypes.FETCH_QUESTIONS_REQUEST, fetchQuestionsSaga);
}
