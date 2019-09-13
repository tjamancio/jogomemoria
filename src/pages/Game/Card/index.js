import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CardsActions from '../../../store/ducks/cards';

import {Container, Text, TextContainer} from './styles';

class Card extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    card1: PropTypes.shape({
      index: PropTypes.number,
      number: PropTypes.number,
    }),
    card2: PropTypes.shape({
      index: PropTypes.number,
      number: PropTypes.number,
    }),
    matches: PropTypes.arrayOf(PropTypes.number).isRequired,
  };

  static defaultProps = {
    card1: null,
    card2: null,
  };

  state = {
    visible: false,
  };

  visible = () => {
    const {index, number, card1, card2, matches} = this.props;

    if ((card1 && card1.index === index) || (card2 && card2.index === index)) {
      return true;
    }

    return matches.includes(number);
  };

  render() {
    const {index, number, selectCard} = this.props;
    const visible = this.visible();
    return (
      <Container disabled={visible} onPress={() => selectCard(index, number)}>
        <TextContainer>{visible && <Text>{number}</Text>}</TextContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  card1: state.cards.card1,
  card2: state.cards.card2,
  matches: state.cards.matches,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CardsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
