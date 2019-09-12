import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserActions from '../../store/ducks/user';

import {Container, TextInput, LoginButton, LoginButtonText} from './styles';

class Login extends Component {
  state = {
    name: 'Thiago',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleLoginClick = () => {
    const {navigation, setName} = this.props;
    const {name} = this.state;
    setName(name);
    navigation.navigate('Main');
  };

  render() {
    const {name} = this.state;
    return (
      <Container>
        <TextInput
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          value={name}
          onChangeText={text => this.setState({name: text})}
        />
        <LoginButton onPress={this.handleLoginClick}>
          <LoginButtonText>ENTRAR</LoginButtonText>
        </LoginButton>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
