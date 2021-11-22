import { Question, QuestionAwnser } from '../dto/question';

export interface InitialFetchQuestionsStateProps {
    testId: string;
    questions: Question[];
    answers: QuestionAwnser[];
    loading: boolean;
    error: any;
}

export interface RootState {
    questions: InitialFetchQuestionsStateProps;
}
