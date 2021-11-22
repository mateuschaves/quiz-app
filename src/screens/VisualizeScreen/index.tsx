import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';
import { Container, Content, Buttons } from './styles';
import { Exam } from '~/@types/store/app.state';
import Question from '~/components/Question';
import { QuestionAnswer } from '~/@types/dto/question';
import colors from '~/theme/colors';
import Button from '~/components/Button';

interface Props {
  route: {
    params: Exam;
  };
}

interface CurrentAnswerStateProps {
  answer: QuestionAnswer;
  index: number;
}

export default function VisualizeScreen({ route }: Props) {
  const exam = route?.params;

  const [answer, setAnswer] = useState<CurrentAnswerStateProps>();

  useEffect(() => {
    const [firstAnswers] = exam.answers;
    setAnswer({
      answer: firstAnswers,
      index: 0,
    });
  }, []);

  function handleNextAnswer() {
    const nextAnswerIndex = (answer?.index || 0) + 1;

    if (answer && exam.answers[nextAnswerIndex]) {
      setAnswer({
        answer: exam.answers[nextAnswerIndex],
        index: nextAnswerIndex,
      });
    }
  }

  function handlePrevAnswer() {
    const prevAnswerIndex = (answer?.index || 0) - 1;

    if (answer && exam.answers[prevAnswerIndex]) {
      setAnswer({
        answer: exam.answers[prevAnswerIndex],
        index: prevAnswerIndex,
      });
    }
  }

  if (!answer?.answer) return <ActivityIndicator color={colors.primary} />;

  return (
    <Container>
      <Content>
        <Question
          key={answer.answer.exam_id}
          question={answer.answer?.question || ''}
          correctAnswer={answer?.answer.correct_answer || ''}
          incorrectAnswers={answer?.answer.incorrect_answers || []}
          questionsAmount={exam.questions.length || 0}
          currentQuestion={answer.index + 1}
          readOnlyAnswer={answer.answer.answer}
          onAnswer={() => {}}
          loading={false}
          readOnly
        />
        <Buttons>
          <Button outlined={false} title="Previous" onPress={() => handlePrevAnswer()} />
          <Button outlined={false} title="Next" onPress={() => handleNextAnswer()} />
        </Buttons>
      </Content>
    </Container>
  );
}
