import styled from 'styled-components/native';
import {colors, metrics} from '../../styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.secondary};
  justify-content: center;
  align-items: stretch;
  padding: 0 ${metrics.basePadding}px;
`;

export const TextInput = styled.TextInput`
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
  height: 44px;
  padding: 0 ${metrics.basePadding}px;
`;

export const LoginButton = styled.TouchableOpacity`
  height: 44px;
  background: ${colors.primary};
  border-radius: ${metrics.baseRadius}px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  margin-top: ${metrics.baseMargin}px;
`;

export const LoginButtonText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;
