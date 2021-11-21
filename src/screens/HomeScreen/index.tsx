import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '~/components/Button';

import {
  Container, Input, Title, Buttons,
} from './styles';

export default function HomeScreen() {
  const dispatch = useDispatch();

  const [quizAmount, setQuizAmount] = useState<number>();

  function handleCancelClick() {
    setQuizAmount(undefined);
  }

  function handleStartClick() {
    if (!quizAmount) {
      Alert.alert('Insert a valid value 😀', 'Questions amout need to be greater than 0');
    }
  }

  return (
    <Container>
      <Title>How many questions ?</Title>
      <Input
        autoFocus
        value={quizAmount?.toString()}
        onChangeText={(value) => setQuizAmount(Number(value))}
        keyboardType="decimal-pad"
        maxLength={2}
      />
      <Buttons>
        <Button outlined title="Cancel" onPress={() => handleCancelClick()} />
        <Button outlined title="Start" onPress={() => handleStartClick()} />
      </Buttons>
    </Container>
  );
}
