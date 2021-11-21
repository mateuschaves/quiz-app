import React from 'react';
import Header from '~/components/Header';

import { Container } from './styles';

export default function QuizScreen() {
  return (
    <Container>
      <Header score={10} />
    </Container>
  );
}
