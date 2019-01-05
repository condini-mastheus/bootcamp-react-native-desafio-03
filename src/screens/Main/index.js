import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as FavoriteActions } from '~/store/ducks/favorites';

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
    favorites: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape),
      isLoading: PropTypes.bool,
      errorOnAdd: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
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
    const { favorites } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Gitmarker</Text>
          <Text style={styles.description}>Adicione seus repositórios favoritos aqui</Text>

          <View style={styles.form}>
            {!!favorites.errorOnAdd && <Text style={styles.error}>{favorites.errorOnAdd}</Text>}

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
              {favorites.isLoading ? (
                <ActivityIndicator size="small" color={styles.loader.color} />
              ) : (
                <Text style={styles.buttonText}>Adicionar aos favoritos</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity onPress={this.handleNavigation}>
            <Text style={styles.footerLink}>
Meus favoritos (
              {favorites.data.length}
)
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites,
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoriteActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
