import styled from 'styled-components/native';
import {colors, metrics} from '../../../styles';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  border-radius: ${metrics.baseRadius * 2}px;
  border-width: 2px;

  padding: ${metrics.basePadding / 4}px;

  width: ${metrics.screenWidth / 5 - 10}px;
  height: ${(metrics.screenWidth / 5) * 1.2}px;
  margin: 5px;
`;

export const TextContainer = styled.View`
  background: ${colors.primary};
  flex: 1;
  border-radius: ${metrics.baseRadius * 2}px;
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 25px;
  color: ${colors.white};
`;
