import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home1 from './src/localization/Convert/Screens/Home1';
import { Home3 } from './src/localization/Convert/Screens/Home3';
import Home2 from './src/localization/Convert/Screens/Home2';
import Home4 from './src/localization/Convert/Screens/Home4';
import Home5 from './src/localization/Convert/Screens/Home5';
import Home6 from './src/localization/Convert/Screens/Home6';
import Home7 from './src/localization/Convert/Screens/Home7';
import Home11 from './src/localization/Convert/Screens/Home11';

import Home9 from './src/localization/Convert/Screens/Home9';
import Home8 from './src/localization/Convert/Screens/Home8';

const Stack = createNativeStackNavigator();

export default function Router(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Dishes" component={Home1} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Home3" component={Home3} />
        <Stack.Screen name="Home4" component={Home4} />
        <Stack.Screen name="Home5" component={Home5} />
        <Stack.Screen name="Home6" component={Home6} />
        <Stack.Screen name="Home11" component={Home11} />

        <Stack.Screen name="Home7" component={Home7} />
        <Stack.Screen name="Home8" component={Home8} />
        <Stack.Screen name="Home9" component={Home9} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
