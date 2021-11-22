import React, { useEffect, useState } from 'react';
import { Vibration } from 'react-native';

import AnswerStatus from '../../enums/AnswerStatusEnum';
import Answer from '../Answer';

import {
  QuestionContainer,
  QuestionContent,
  QuestionInfo,
  QuestionIndex,
  QuestionTitle,
} from './styles';

interface QuestionProps {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  questionsAmount: number;
  currentQuestion: number;
}

const ONE_SECOND_IN_MS = 1000;

export default function Question({
  question,
  correctAnswer,
  incorrectAnswers,
  questionsAmount,
  currentQuestion,
}: QuestionProps) {
  const [answers, setAnswers] = useState<string[]>([]);
  const [answerSelected, setAnswerSelected] = useState('');

  useEffect(() => {
    setAnswers([...incorrectAnswers, correctAnswer]);
  }, []);

  function getAnswerStatus(CurrentAnswerItem: string): string {
    if (CurrentAnswerItem === answerSelected && answerSelected === correctAnswer) {
      Vibration.vibrate();
      return AnswerStatus.CORRECT;
    }

    if (CurrentAnswerItem === answerSelected && incorrectAnswers.includes(answerSelected)) {
      Vibration.vibrate(1.5 * ONE_SECOND_IN_MS);
      return AnswerStatus.WRONG;
    }

    return AnswerStatus.DEFAULT;
  }

  function renderAnswers() {
    return answers.map((answer) => (
      <Answer
        key={answer}
        title={answer}
        status={getAnswerStatus(answer)}
        onPress={() => setAnswerSelected(answer)}
      />
    ));
  }

  return (
    <>
      <QuestionContainer>
        <QuestionInfo>
          <QuestionIndex>
            {currentQuestion}
            /
            {questionsAmount}
          </QuestionIndex>
        </QuestionInfo>
        <QuestionContent>
          <QuestionTitle>{question}</QuestionTitle>
        </QuestionContent>
      </QuestionContainer>
      {renderAnswers()}
    </>
  );
}
