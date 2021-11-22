import React from 'react';
import { Container, Title } from './styles';
import AnswerStatus from '../../screens/QuizScreen/enums/AnswerStatusEnum';

const { CORRECT, WRONG, DEFAULT } = AnswerStatus;

export interface StatusProps {
  status: typeof CORRECT | typeof WRONG | typeof DEFAULT;
}

interface AnswerProps extends StatusProps {
  title: string;
  // eslint-disable-next-line no-unused-vars
  onPress: () => void;
}

export default function Answer({ title, status, onPress }: AnswerProps) {
  return (
    <Container status={status} onPress={onPress}>
      <Title status={status}>{title}</Title>
    </Container>
  );
}
