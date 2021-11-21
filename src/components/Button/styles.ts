import styled from 'styled-components/native';
import colors from '~/theme/colors';

interface ButtonProps {
    outlined: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.outlined ? 'transparent' : colors.accent)};
    padding: 8px 40px;
    margin: 50px 0px 0px 0;
    border-radius: 8px;
    border-width: ${(props) => (props.outlined ? 1 : 0)}px;
    border-color: ${colors.white};
    height: 56px;
`;

export const Title = styled.Text<ButtonProps>`
    color: ${colors.white};
    font-size: 24px;
`;
