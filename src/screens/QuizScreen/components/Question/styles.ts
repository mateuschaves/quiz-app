import styled from 'styled-components/native';
import colors from '~/theme/colors';

export const QuestionContainer = styled.View`
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 8px;
  width: 90%;
  height: 159px;
  padding: 8px;
`;

export const QuestionContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const QuestionTitle = styled.Text`
  text-align: center;
  color: ${colors.white};
  font-size: 24px;
  font-weight: bold
`;

export const QuestionInfo = styled.View`
`;

export const QuestionIndex = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
`;
