import React from 'react';

import animation from '~/assets/animations/empty.json';

import { Container, Animation, EmptyTitle } from './styles';

export default function EmptyHistory() {
  return (
    <Container>
      <Animation loop autoPlay source={animation} />
      <EmptyTitle>You haven't taken any quiz yet.</EmptyTitle>
    </Container>
  );
}
