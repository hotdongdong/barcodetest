import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Start} from './module-sto-in/screens/start';
import {InfomationConfirmation} from './module-sto-in/screens/sto-information-confirmation';
import {PreviewMode} from './module-sto-in/screens/sto-preview-mode';

import {Colors} from './theme';

export const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="start"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.ColorPrimary,
          },
          headerTintColor: Colors.ColorTextWhite,
          headerBackTitleVisible: false,
          headerTitleAlign: 'left',
        }}>
        <Stack.Screen name="start" component={Start} />
        <Stack.Screen
          name="InfomationConfirmation"
          component={InfomationConfirmation}
        />
        <Stack.Screen name="PreviewMode" component={PreviewMode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
