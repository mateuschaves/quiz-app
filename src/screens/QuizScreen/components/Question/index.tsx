import React, { useEffect, useState } from 'react';
import { Vibration, ActivityIndicator } from 'react-native';
import he from 'he';

import colors from '~/theme/colors';

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
  loading: boolean;
  // eslint-disable-next-line no-unused-vars
  onAwnser: (answer: string) => void;
}

const ONE_SECOND_IN_MS = 1000;

export default function Question({
  question,
  correctAnswer,
  incorrectAnswers,
  questionsAmount,
  currentQuestion,
  loading,
  onAwnser,
}: QuestionProps) {
  const [answers, setAnswers] = useState<string[]>([]);
  const [answerSelected, setAnswerSelected] = useState('');

  useEffect(() => {
    setAnswers([...incorrectAnswers, correctAnswer].sort());
    setAnswerSelected('');
  }, [incorrectAnswers, correctAnswer]);

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

  function handleAnswerClick(answer: string) {
    if (!answerSelected) {
      setAnswerSelected(answer);
      onAwnser(answer);
    } else {
      Vibration.vibrate(0.5 * ONE_SECOND_IN_MS);
    }
  }

  function renderAnswers() {
    return answers.map((answer) => (
      <Answer
        key={answer}
        title={he.decode(answer)}
        status={getAnswerStatus(answer)}
        onPress={() => handleAnswerClick(answer)}
      />
    ));
  }

  return (
    <>
      {loading ? (
        <ActivityIndicator size={32} color={colors.primary} />
      ) : (
        <QuestionContainer>
          <QuestionInfo>
            <QuestionIndex>
              {currentQuestion}
              /
              {questionsAmount}
            </QuestionIndex>
          </QuestionInfo>
          <QuestionContent>
            <QuestionTitle>{he.decode(question)}</QuestionTitle>
          </QuestionContent>
        </QuestionContainer>
      )}
      {renderAnswers()}
    </>
  );
}
