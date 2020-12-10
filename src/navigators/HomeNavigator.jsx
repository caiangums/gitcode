import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {ProfileScreen, ReposScreen} from '_screens';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Repos" component={ReposScreen} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
