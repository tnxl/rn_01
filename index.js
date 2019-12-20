/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {AppDrawerNavigatorContainer} from './src/navigator/AppDrawerNavigator';

AppRegistry.registerComponent(appName, () => AppDrawerNavigatorContainer);
