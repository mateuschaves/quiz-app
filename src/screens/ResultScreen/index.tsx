import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import colors from '~/theme/colors';

import TrophyAnimation from '~/assets/animations/trophy.json';

import {
  Container,
  ResultTitle,
  Content,
  ScoreContainer,
  Score,
  Animation,
  ScoreDescribe,
} from './styles';
import Button from '~/components/Button';
import { navigate } from '~/navigation/NavigationService';
import { Exam, InitialFetchQuestionsStateProps, RootState } from '~/@types/store/app.state';

export default function ResultScreen() {
  const { exams, loading } = useSelector<RootState, InitialFetchQuestionsStateProps>(
    (state) => state.questions,
  );

  const [currentExam, setCurrentExam] = useState<Exam>();

  useEffect(() => {
    const [_currentExam] = exams;
    setCurrentExam(_currentExam);
  }, [loading, exams]);

  function handlePlayAgainClick() {
    navigate('QuizAmount', {});
  }

  function getScoreStatistic(allQuestions: number, correctQuestions: number) {
    if (!allQuestions) return '0%';
    return `${((correctQuestions / allQuestions) * 100).toFixed(0)}%`;
  }

  return (
    <Container colors={[colors.accent, colors.primary]}>
      <Content>
        <ResultTitle>Your results</ResultTitle>
        <Animation source={TrophyAnimation} loop autoPlay />
        <ScoreContainer>
          <Score>
            {currentExam?.score}
            {' '}
            hits !
          </Score>
        </ScoreContainer>

        <ScoreDescribe>
          You got
          {' '}
          {getScoreStatistic(currentExam?.questions?.length || 0, currentExam?.score || 0)}
          {' '}
          of the questions right
        </ScoreDescribe>

        <Button title="Play again" onPress={() => handlePlayAgainClick()} />
      </Content>
    </Container>
  );
}
