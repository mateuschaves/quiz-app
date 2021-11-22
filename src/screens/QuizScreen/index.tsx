import React, { useRef } from 'react';

import Header from '~/components/Header';

import { Container, Content } from './styles';
import Question from './components/Question/index';

export default function QuizScreen() {
  const confetti = useRef<any>(null);

  setTimeout(() => {
    if (confetti.current) {
      confetti.current.start();
    }
  }, 1000);

  return (
    <Container>
      <Header score={10} />
      <Content>
        <Question
          question='Which Pok&eacute;mon can learn the move "Secret Power" by leveling up?'
          correctAnswer="sim"
          incorrectAnswers={['Type:Null', 'Arceus', 'Silvally']}
          questionsAmount={10}
          currentQuestion={1}
        />
      </Content>
    </Container>
  );
}
