/* eslint-disable no-case-declarations */
/* eslint-disable camelcase */
import { AxiosError } from 'axios';
import { FetchQuestionDto, QuestionAwnser } from '../../../@types/dto/question';
import { Exam, InitialFetchQuestionsStateProps } from '../../../@types/store/app.state';

export const questionsTypes = {
  FETCH_QUESTIONS_REQUEST: 'questions/FETCH_QUESTIONS_REQUEST',
  FETCH_QUESTIONS_SUCCESS: 'questions/FETCH_QUESTIONS_SUCCESS',
  FETCH_QUESTIONS_ERROR: 'questions/FETCH_QUESTIONS_ERROR',
  ANWSER_QUESTION: 'questions/ANWSER_QUESTION',
};

export const questionsActions = {
  fetchQuestions: (data: FetchQuestionDto) => ({
    type: questionsTypes.FETCH_QUESTIONS_REQUEST,
    payload: data,
  }),
  fetchQuestionsSuccess: (data: Exam) => ({
    type: questionsTypes.FETCH_QUESTIONS_SUCCESS,
    payload: data,
  }),
  fetchQuestionsError: (error: AxiosError) => ({
    type: questionsTypes.FETCH_QUESTIONS_ERROR,
    payload: error,
  }),
  anwserQuestion: (data: QuestionAwnser) => ({
    type: questionsTypes.ANWSER_QUESTION,
    payload: data,
  }),
};

interface actionProps {
    type?: string;
    payload: any;
}

const initialState: InitialFetchQuestionsStateProps = {
  exams: [],
  loading: false,
  error: undefined,
};

export const questionsReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case questionsTypes.FETCH_QUESTIONS_REQUEST:
      return { ...state, loading: true };
    case questionsTypes.FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false, exams: [...state.exams, action.payload] };
    case questionsTypes.FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case questionsTypes.ANWSER_QUESTION:
      const { correct_answer, answer, exam_id } = action.payload;
      const examIndex = state.exams.findIndex((_exam) => _exam.exam_id === exam_id);

      const exam = state.exams[examIndex];

      exam.answers.push(action.payload);
      exam.score = correct_answer === answer ? exam.score + 1 : exam.score;

      state.exams[examIndex] = exam;

      return {
        ...state,
        exams: [...state.exams],
      };
    default:
      return state;
  }
};
