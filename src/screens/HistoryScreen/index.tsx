import React from 'react';
import { useSelector } from 'react-redux';
import EmptyHistory from './components/EmptyHistory';

import { Container } from './styles';
import { RootState, InitialFetchQuestionsStateProps } from '../../@types/store/app.state';
import ExamItem from './components/ExamItem';

export default function HistoryScreen() {
  const { exams } = useSelector<RootState, InitialFetchQuestionsStateProps>(
    (state) => state.questions,
  );

  if (!exams.length) return <EmptyHistory />;

  return (
    <Container>
      {exams.map((exam) => (
        <ExamItem key={exam.exam_id} exam={exam} />
      ))}
    </Container>
  );
}
