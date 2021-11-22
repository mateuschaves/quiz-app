import { AxiosError } from 'axios';
import uuid from 'react-native-uuid';
import { FetchQuestionDto, Question, QuestionAwnser } from '../../../@types/dto/question';

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
  fetchQuestionsSuccess: (data: Question[]) => ({
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
    payload?: AxiosError | Question[];
}

const initialState = {
  testId: uuid.v4(),
  questions: [],
  awnsers: [],
  loading: false,
  error: null,
};

export const questionsReducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case questionsTypes.FETCH_QUESTIONS_REQUEST:
      return { ...state, loading: true };
    case questionsTypes.FETCH_QUESTIONS_SUCCESS:
      return { ...state, loading: false, questions: action.payload };
    case questionsTypes.FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        loading: false,
        questions: [],
        error: action.payload,
      };
    case questionsTypes.ANWSER_QUESTION:
      return {
        ...state,
        awnsers: [...state.awnsers, action.payload],
      };
    default:
      return state;
  }
};
