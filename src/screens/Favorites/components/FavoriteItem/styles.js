import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    margin: metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
  },
  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },
  name: {
    color: colors.darker,
    fontWeight: 'bold',
    fontSize: 14,
  },
  description: {
    color: colors.dark,
    marginTop: metrics.baseMargin / 2,
    fontSize: 12,
  },
});

export default styles;
