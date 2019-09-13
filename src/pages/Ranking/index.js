import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import {
  Container,
  RankingContainer,
  RankingItem,
  Name,
  Moves,
  None,
} from './styles';
import Header from '../../components/Header';
import AsyncStorage from '@react-native-community/async-storage';

import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../styles';

const TabIcon = () => <Icon name="trophy" size={20} color={colors.gold} />;

export default class Ranking extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    ranking: [],
  };

  componentDidMount() {
    this.load();
  }

  load = async () => {
    const rankingJson = await AsyncStorage.getItem('@JogoMemoria:ranking');

    let ranking;

    if (rankingJson) {
      ranking = JSON.parse(rankingJson);
    } else {
      ranking = [];
    }

    ranking.sort((item1, item2) => item1.moves > item2.moves);

    this.setState({ranking});
  };

  render() {
    const {ranking} = this.state;
    return (
      <Container>
        <Header title="Ranking" />
        <ScrollView>
          <RankingContainer>
            {ranking.length > 0 ? (
              ranking.map((item, index) => (
                <RankingItem key={index}>
                  <Name>{item.name}</Name>
                  <Moves>{item.moves} jogadas</Moves>
                </RankingItem>
              ))
            ) : (
              <None>Nenhum registro ainda!</None>
            )}
          </RankingContainer>
        </ScrollView>
      </Container>
    );
  }
}
