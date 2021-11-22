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

  const validExams = exams.filter((exam) => exam.questions.length === exam.answers.length);

  if (!validExams.length) return <EmptyHistory />;

  return (
    <Container>
      {validExams
        .sort((a, b) => a.time - b.time)
        .map((exam) => (
          <ExamItem key={exam.exam_id} exam={exam} />
        ))}
    </Container>
  );
}
