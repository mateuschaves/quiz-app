/* eslint-disable camelcase */
import { Question, QuestionAnswer } from '../dto/question';

export interface Exam {
    exam_id: string;
    questions: Question[];
    answers: QuestionAnswer[];
    score: number;
    time: number;
}

export interface InitialFetchQuestionsStateProps {
    exams: Exam[]
    loading: boolean;
    error: any;
}

export interface RootState {
    questions: InitialFetchQuestionsStateProps;
}
