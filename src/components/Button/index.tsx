import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  outlined?: boolean;
}

export default function Button({ title, onPress, outlined = true }: ButtonProps) {
  return (
    <Container onPress={onPress} outlined={outlined}>
      <Title outlined={outlined}>{title}</Title>
    </Container>
  );
}
