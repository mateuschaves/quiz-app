import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Animation = styled(LottieView)`
    width: 300px
`;

export const EmptyTitle = styled.Text`
    font-size: 24px;
    font-weight: 400;
    margin-top: 24px;
`;
