import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CardsActions from '../../store/ducks/cards';
import UserActions from '../../store/ducks/user';

import {Container, Left, Title, Button} from './styles';

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    resetCards: PropTypes.func.isRequired,
    resetUser: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const {navigation, resetCards, resetUser} = this.props;
    resetCards();
    resetUser();
    navigation.navigate('Login');
  };

  render() {
    const {title} = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Left />
        <Title>{title}</Title>
        <Button onPress={this.handleClick}>
          <Icon name="exit-to-app" size={20} />
        </Button>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({...CardsActions, ...UserActions}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(withNavigation(Header));
