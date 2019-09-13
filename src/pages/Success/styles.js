import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {metrics} from '../../styles';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Congratulations = styled.Text`
  align-self: center;
  font-size: 40px;
  font-weight: bold;
  color: ${colors.success};
`;

export const Moves = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: ${metrics.baseMargin * 2}px;
  background: ${colors.success};
  padding: ${metrics.basePadding}px;
  border-radius: ${metrics.baseRadius}px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
  font-size: 16px;
`;
