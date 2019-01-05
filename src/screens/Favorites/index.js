import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import FavoriteItem from './components/FavoriteItem';

class Favorites extends Component {
  static navigationOptions = {
    title: 'Meus favoritos',
  };

  static propTypes = {
    favorites: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
  };

  renderList = ({ item }) => <FavoriteItem favorite={item} />;

  render() {
    const { favorites } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={favorites}
          renderItem={this.renderList}
          keyExtractor={item => String(item.id)}
          ListEmptyComponent={<Text style={styles.emptyList}>Nenhum favorito adicionado</Text>}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  favorites: state.favorites.data,
});

export default connect(mapStateToProps)(Favorites);
