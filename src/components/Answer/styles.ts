import styled from 'styled-components/native';
import colors from '~/theme/colors';

import { StatusProps } from './index';

const ContainerBackgroundColor = {
  CORRECT: colors.primary,
  WRONG: colors.wrong,
  DEFAULT: 'transparent',
};

const ContainerBorderColor = {
  CORRECT: colors.primary,
  WRONG: colors.wrong,
  DEFAULT: colors.primary,
};

const TitleColor = {
  CORRECT: colors.white,
  WRONG: colors.white,
  DEFAULT: colors.primary,
};

export const Container = styled.TouchableOpacity<StatusProps>`
  background-color: ${(props) => ContainerBackgroundColor[props.status || 'DEFAULT']};
  border-width: 1px;
  border-color: ${(props) => ContainerBorderColor[props.status || 'DEFAULT']};
  height: 48px;
  width: 90%;
  border-radius: 8px;
  justify-content: center;
  align-self: center;
  margin-top: 16px;
  padding: 8px;
`;

export const Title = styled.Text<StatusProps>`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => TitleColor[props.status || 'DEFAULT']};
  text-align: center;
`;
