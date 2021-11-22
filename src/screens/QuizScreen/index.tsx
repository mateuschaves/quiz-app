import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import Header from '~/components/Header';

import { Container, Content } from './styles';
import Question from './components/Question/index';
import { RootState, InitialFetchQuestionsStateProps } from '~/@types/store/app.state';
import { Question as IQuestion } from '~/@types/dto/question';
import { questionsActions } from '../../store/ducks/Question/Questions';
import { QuestionAwnser } from '../../@types/dto/question';
import { navigate } from '~/navigation/NavigationService';
import { Exam } from '../../@types/store/app.state';

interface CurrentQuestionStateProps {
  question: IQuestion;
  index: number;
}

export default function QuizScreen() {
  const dispatch = useDispatch();

  const { exams, loading } = useSelector<RootState, InitialFetchQuestionsStateProps>(
    (state) => state.questions,
  );

  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestionStateProps>();
  const [currentExam, setCurrentExam] = useState<Exam>();

  useEffect(() => {
    const [_currentExam] = exams.reverse();

    setCurrentExam(_currentExam);
    const [firstQuestion] = _currentExam.questions;
    setCurrentQuestion({
      question: firstQuestion,
      index: 0,
    });
  }, [loading]);

  function onAwnser(answer: string) {
    const questionAnswer: QuestionAwnser = {
      ...currentQuestion?.question,
      answer,
      exam_id: currentExam?.exam_id,
    };

    dispatch(questionsActions.anwserQuestion(questionAnswer));

    if (currentQuestion && currentExam?.questions[currentQuestion?.index + 1]) {
      const nextQuestionIndex = currentQuestion?.index + 1;

      setTimeout(() => {
        setCurrentQuestion({
          question: currentExam.questions[nextQuestionIndex],
          index: nextQuestionIndex,
        });
      }, 1500);
    } else {
      setTimeout(() => {
        navigate('Result', {});
      }, 1500);
    }
  }

  return (
    <Container>
      <Header score={currentExam?.score || 0} />
      <Content>
        <Question
          question={currentQuestion?.question.question || ''}
          correctAnswer={currentQuestion?.question.correct_answer || ''}
          incorrectAnswers={currentQuestion?.question.incorrect_answers || []}
          questionsAmount={currentExam?.questions?.length || 0}
          currentQuestion={(currentQuestion?.index || 0) + 1}
          loading={loading}
          onAwnser={(awnser: string) => onAwnser(awnser)}
        />
      </Content>
    </Container>
  );
}
