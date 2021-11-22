/* eslint-disable camelcase */
export interface FetchQuestionDto {
  amount: number;
}

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuestionAnswer extends Question {
  answer: string;
  exam_id?: string;
}
