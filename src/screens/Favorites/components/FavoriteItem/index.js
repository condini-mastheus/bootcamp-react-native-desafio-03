import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default class FavoriteItem extends Component {
  static propTypes = {
    favorite: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        avatar_url: PropTypes.string,
      }).isRequired,
    }).isRequired,
  };

  vaitomanocu = () => {};

  render() {
    const {
      favorite: { name, owner, description },
    } = this.props;

    // console.tron.log(owner);
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{ uri: owner.avatar_url }} />

        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.descripton} numberOfLines={2}>
            {description}
          </Text>
        </View>
      </View>
    );
  }
}
