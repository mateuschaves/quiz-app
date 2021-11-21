import React from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons } from '@expo/vector-icons';

import colors from '~/theme/colors';

import { Container, Label, Row } from './styles';

interface HeaderProps {
  score: number;
}

export default function Header({ score }: HeaderProps) {
  return (
    <Container>
      <Row>
        <Ionicons name="medal-outline" size={32} color={colors.white} />
        <Label>
          {score}
          {' '}
          hits
        </Label>
      </Row>
    </Container>
  );
}
