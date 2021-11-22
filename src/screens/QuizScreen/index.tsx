import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import Header from '~/components/Header';

import { Container, Content } from './styles';
import Question from './components/Question/index';
import { RootState, InitialFetchQuestionsStateProps } from '~/@types/store/app.state';
import { Question as IQuestion } from '~/@types/dto/question';

interface CurrentQuestionStateProps {
  question: IQuestion;
  index: number;
}

export default function QuizScreen() {
  const { questions, loading } = useSelector<RootState, InitialFetchQuestionsStateProps>(
    (state) => state.questions,
  );

  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestionStateProps>();

  useEffect(() => {
    const [firstQuestion] = questions;
    setCurrentQuestion({
      question: firstQuestion,
      index: 0,
    });
  }, [questions]);

  function onAwnser() {
    if (currentQuestion && questions[currentQuestion?.index + 1]) {
      const nextQuestionIndex = currentQuestion?.index + 1;

      setTimeout(() => {
        setCurrentQuestion({
          question: questions[nextQuestionIndex],
          index: nextQuestionIndex,
        });
      }, 1500);
    }
  }

  return (
    <Container>
      <Header score={0} />
      <Content>
        <Question
          question={currentQuestion?.question.question || ''}
          correctAnswer={currentQuestion?.question.correct_answer || ''}
          incorrectAnswers={currentQuestion?.question.incorrect_answers || []}
          questionsAmount={questions?.length}
          currentQuestion={(currentQuestion?.index || 0) + 1}
          loading={loading}
          onAwnser={() => onAwnser()}
        />
      </Content>
    </Container>
  );
}
