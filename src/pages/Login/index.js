import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserActions from '../../store/ducks/user';

import {
  Container,
  TextInput,
  LoginButton,
  LoginButtonText,
  Error,
} from './styles';

class Login extends Component {
  state = {
    name: '',
    error: '',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleLoginClick = () => {
    const {navigation, setName} = this.props;
    const {name} = this.state;
    if (name) {
      setName(name);
      navigation.navigate('Main');
    } else {
      this.setState({error: 'Digite um nome válido!'});
    }
  };

  render() {
    const {name, error} = this.state;
    return (
      <Container>
        {!!error && <Error>{error}</Error>}
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
