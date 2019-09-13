import styled from 'styled-components/native';
import {colors, metrics} from '../../styles';
import {getStatusBarHeight, isIphoneX} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: ${colors.white};
  border-bottom-color: ${colors.light};
  border-bottom-width: 1px;
  height: ${!isIphoneX() ? 50 : 50 + getStatusBarHeight()}px;
  padding: ${!isIphoneX() ? 0 : getStatusBarHeight()}px ${metrics.basePadding}px
    0 ${metrics.basePadding}px;
`;

export const Left = styled.View``;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: ${colors.secondary};
`;

export const Button = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})``;
