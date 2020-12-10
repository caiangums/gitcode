import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigator from './HomeNavigator';
import {LoginScreen, StartScreen} from '_screens';

const RootStack = createStackNavigator();

const OPTIONS = {gestureEnabled: false};

function AppNavigator(props) {
  return (
    <NavigationContainer {...props}>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Start" component={StartScreen} />
        <RootStack.Screen
          name="Login"
          component={LoginScreen}
          options={OPTIONS}
        />
        <RootStack.Screen
          name="Home"
          component={HomeNavigator}
          options={OPTIONS}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
