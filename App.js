/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {CalendarList} from 'react-native-calendars';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MainNavigation = () => (
  <CalendarList
    current={'2020-06-10'}
    pastScrollRange={24}
    futureScrollRange={24}
  />
);

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Main" component={MainNavigation} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
};
