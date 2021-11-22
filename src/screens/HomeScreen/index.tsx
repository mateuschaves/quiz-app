import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';

import { questionsActions } from '../../store/ducks/Question/Questions';

import {
  Container, Input, Title, Buttons,
} from './styles';

export default function HomeScreen() {
  const [quizAmount, setQuizAmount] = useState<number>();

  const dispatch = useDispatch();

  function handleCancelClick() {
    setQuizAmount(undefined);
  }

  function handleStartClick() {
    if (!quizAmount) {
      Alert.alert('Insert a valid value 😀', 'Questions amout need to be greater than 0');
    } else {
      dispatch(questionsActions.fetchQuestions({ amount: quizAmount }));
    }
  }

  return (
    <Container>
      <Title>How many questions ?</Title>
      <Input
        autoFocus
        value={quizAmount?.toString()}
        onChangeText={(value) => setQuizAmount(Number(value))}
        keyboardType="number-pad"
        maxLength={2}
      />
      <Buttons>
        <Button outlined title="Cancel" onPress={() => handleCancelClick()} />
        <Button outlined title="Start" onPress={() => handleStartClick()} />
      </Buttons>
    </Container>
  );
}
