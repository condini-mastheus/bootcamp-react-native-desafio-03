import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Main from '~/screens/Main';
import Favorites from '~/screens/Favorites';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Favorites,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.primaryDark,
        },
        headerTintColor: colors.white,
        headerBackTitle: false,
      },
    },
  ),
);

export default Routes;
