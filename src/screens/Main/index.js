import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView, View, Text, TextInput, TouchableOpacity, Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FavoriteActions from '~/store/actions/favorites';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    addFavoriteRequest: PropTypes.func.isRequired,
    favoritesCount: PropTypes.number.isRequired,
  };

  state = {
    repoInput: '',
  };

  handleNavigation = () => {
    const { navigation } = this.props;
    navigation.navigate('Favorites');
  };

  addRepository = () => {
    const { repoInput } = this.state;
    const { addFavoriteRequest } = this.props;

    if (!repoInput.length) return;

    addFavoriteRequest(repoInput);

    this.setState({
      repoInput: '',
    });

    Keyboard.dismiss();
  };

  render() {
    const { repoInput } = this.state;
    const { favoritesCount } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Gitmarker</Text>
          <Text style={styles.description}>Adicione seus repositórios favoritos aqui</Text>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="usuário/repositório"
              underlineColorAndroid="transparent"
              value={repoInput}
              onChangeText={text => this.setState({ repoInput: text })}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={this.addRepository}
              activeOpacity={0.6}
            >
              <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.handleNavigation}>
            <Text style={styles.footerLink}>
Meus favoritos (
              {favoritesCount}
)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favoritesCount: state.favorites.length,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
