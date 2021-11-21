import styled from 'styled-components/native';
import colors from '~/theme/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
`;

export const Input = styled.TextInput`
  width: 90px;
  border-bottom-width: 1px;
  border-color: ${colors.white};
  margin-top: 24px;
  color: ${colors.white};
  font-weight: bold;
  font-size: 32px;
  text-align: center;
`;

export const Buttons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;
