import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CardsActions from '../../store/ducks/cards';

import {Container, Congratulations, Moves, Button, ButtonText} from './styles';

class Success extends Component {
  static propTypes = {
    moves: PropTypes.number.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    resetCards: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const {navigation, resetCards} = this.props;
    resetCards();
    navigation.navigate('Main');
  };
  render() {
    const {moves} = this.props;
    return (
      <Container>
        <Congratulations>Parabéns</Congratulations>
        <Text>Você concluiu o jogo em </Text>
        <Moves>{moves}</Moves>
        <Text>rodadas</Text>
        <Button onPress={this.handleClick}>
          <ButtonText>Reiniciar Jogo</ButtonText>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  moves: state.cards.moves,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CardsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Success);
