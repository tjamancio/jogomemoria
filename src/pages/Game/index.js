import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {View, ScrollView} from 'react-native';

import {connect} from 'react-redux';

import {Container, Cards, Moves} from './styles';
import Header from '../../components/Header';
import Card from './Card';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../styles';

const TabIcon = () => <Icon name="cards" size={20} color={colors.primary} />;

class Game extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  static propTypes = {
    moves: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    cards: [],
    pairs: 2,
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {matches} = this.props;
    const {pairs} = this.state;
    if (matches.length === pairs) {
      this.success();
    }
  }

  success = async () => {
    const {name, moves, navigation} = this.props;
    const rankingJson = await AsyncStorage.getItem('@JogoMemoria:ranking');

    let ranking;

    if (rankingJson) {
      ranking = JSON.parse(rankingJson);
    } else {
      ranking = [];
    }

    ranking.push({name: name, moves: moves});

    await AsyncStorage.setItem('@JogoMemoria:ranking', JSON.stringify(ranking));

    navigation.navigate('Success');
  };

  load = () => {
    const {pairs} = this.state;
    let cards = Array.from(Array(pairs), (x, index) => index + 1);
    cards = [...cards, ...cards];
    cards.sort((elem1, elem2) => Math.random() - Math.random());

    this.setState({cards});
  };

  render() {
    const {moves} = this.props;
    const {cards} = this.state;
    return (
      <Container>
        <Header title="Jogo da Memória" />
        <View>
          <Moves>Total de jogadas: {moves}</Moves>
        </View>
        <ScrollView>
          <Cards>
            {cards.map((card, index) => (
              <Card key={index} number={card} index={index} />
            ))}
          </Cards>
        </ScrollView>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  moves: state.cards.moves,
  matches: state.cards.matches,
  name: state.user.name,
});

export default connect(mapStateToProps)(Game);
