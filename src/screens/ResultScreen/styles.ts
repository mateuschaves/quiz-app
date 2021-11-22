import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import colors from '~/theme/colors';

export const Container = styled(LinearGradient)`
  flex: 1;
`;

export const ResultTitle = styled.Text`
    text-align: center;
    color: ${colors.white};
    font-size: 40px;
    font-weight: bold;
    margin-top: 70px;
`;

export const Content = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ScoreContainer = styled.View`
    width: 70%;
    height: 104px;
    margin-top: 48px;
    background-color: ${colors.primary};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const Animation = styled(LottieView)`
    width: 300px;
    height: 120px;
`;

export const Score = styled.Text`
    font-size: 32px;
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
`;

export const ScoreDescribe = styled(Score)`
    font-weight: normal;
    font-size: 24px;
    margin-top: 24px;
`;
