import styled from 'styled-components/native';
import colors from '~/theme/colors';

export const Container = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  height: 110px;
`;

export const Label = styled.Text`
    color: ${colors.white};
    font-size: 24px;
    font-weight: bold;
    margin-left: 8px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;
