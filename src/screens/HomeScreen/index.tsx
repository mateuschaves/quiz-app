import React, { useState } from 'react';
import { Alert } from 'react-native';

import Button from '~/components/Button';
import { navigate } from '~/navigation/NavigationService';

import {
  Container, Input, Title, Buttons,
} from './styles';

export default function HomeScreen() {
  const [quizAmount, setQuizAmount] = useState<number>();

  function handleCancelClick() {
    setQuizAmount(undefined);
  }

  function handleStartClick() {
    if (!quizAmount) {
      Alert.alert('Insert a valid value 😀', 'Questions amout need to be greater than 0');
    } else {
      navigate('Quiz', {});
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
