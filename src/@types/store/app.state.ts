/* eslint-disable camelcase */
import { Question, QuestionAwnser } from '../dto/question';

export interface Exam {
    exam_id: string;
    questions: Question[];
    answers: QuestionAwnser[];
    score: number;
}

export interface InitialFetchQuestionsStateProps {
    exams: Exam[]
    loading: boolean;
    error: any;
}

export interface RootState {
    questions: InitialFetchQuestionsStateProps;
}
