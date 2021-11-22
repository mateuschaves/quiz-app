import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import EmptyHistory from './components/EmptyHistory';
import { Container } from './styles';
import { RootState, InitialFetchQuestionsStateProps, Exam } from '../../@types/store/app.state';
import ExamItem from './components/ExamItem';

export default function HistoryScreen() {
  const { exams } = useSelector<RootState, InitialFetchQuestionsStateProps>(
    (state) => state.questions,
  );

  const validExams = exams.filter((exam) => exam.questions.length === exam.answers.length);

  if (!validExams.length) return <EmptyHistory />;

  return (
    <Container>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 80 }}
        data={validExams}
        renderItem={({ item }: {item: Exam}) => <ExamItem key={item.exam_id} exam={item} />}
        keyExtractor={(item: Exam) => item.exam_id}
      />
    </Container>
  );
}
