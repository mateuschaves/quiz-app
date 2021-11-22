import styled from 'styled-components/native';
import colors from '~/theme/colors';

export const Container = styled.TouchableOpacity`
  border-radius: 8px;
  background-color: ${colors.white};
  height: 120px;
  margin-top: 16px;
  padding: 16px;
`;

export const Time = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 8px;
  align-items: center;
`;

export const Score = styled.Text`
  color: ${colors.accent};
  font-size: 24px;
  margin-left: 8px;
`;

export const ScoreTime = styled.Text`
  color: ${colors.accent};
  font-size: 20px;
  font-weight: normal;
`;
