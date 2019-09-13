import styled from 'styled-components/native';
import {metrics} from '../../styles';
export const Container = styled.View`
  flex: 1;
`;

export const Moves = styled.Text`
  align-self: center;
  font-size: 20px;
  margin-top: ${metrics.baseMargin}px;
`;

export const Cards = styled.View`
  margin-top: ${metrics.baseMargin}px;
  flex-direction: row;
  flex-wrap: wrap;
`;
