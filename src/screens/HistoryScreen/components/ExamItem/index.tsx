import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Exam } from '~/@types/store/app.state';

import colors from '~/theme/colors';

import {
  Container, Time, Row, Score, ScoreTime,
} from './styles';
import { timeSince } from '~/utils/date';
import { getScoreStatistic } from '~/utils/score';
import { navigate } from '~/navigation/NavigationService';

interface ExamItemProps {
  exam: Exam;
}

export default function ExamItem({ exam }: ExamItemProps) {
  function handleExamClick() {
    navigate('Visualize', exam);
  }

  return (
    <Container
      style={{
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}
      onPress={() => handleExamClick()}
    >
      <Time>
        {timeSince(new Date(exam?.time))}
        {'\n'}
        <ScoreTime>{`you got ${exam.score} questions right`}</ScoreTime>
      </Time>

      <Row>
        <Ionicons name="trophy-outline" size={24} color={colors.accent} />
        <Score>{getScoreStatistic(exam.questions.length, exam.score)}</Score>
      </Row>
    </Container>
  );
}
