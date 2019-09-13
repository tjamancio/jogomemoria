import styled from 'styled-components/native';
import {metrics, colors} from '../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const RankingContainer = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const RankingItem = styled.View`
  justify-content: space-between;
  flex-direction: row;
  border-bottom-width: 1;
  border-bottom-color: ${colors.light};
`;

export const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Moves = styled.Text`
  font-size: 20px;
`;
