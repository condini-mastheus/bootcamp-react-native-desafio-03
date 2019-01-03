import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from '~/screens/Main';

const Routes = createAppContainer(
  createStackNavigator({
    Main,
  }),
);

export default Routes;
