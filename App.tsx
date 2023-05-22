/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format

*/
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MainScreen from './src/screens/main';
import WebContainerScreen from './src/screens/web-container';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

type RootStackParamList = {
  Root: TabStackParamList;
  Profile: {userId: string};
  Feed: {sort: 'latest' | 'top'} | undefined;
  WebContainer: {url: string};
};
type TabStackParamList = {
  Doa: undefined;
  Sunnah: undefined;
};

const Tab = createMaterialBottomTabNavigator<TabStackParamList>();

const Stack = createNativeStackNavigator<RootStackParamList>();

function Sunnah() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Coming soon!</Text>
    </View>
  );
}
function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Doa" component={MainScreen} />
      <Tab.Screen name="Sunnah" component={Sunnah} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen name="Profile" component={Profile} />
         */}
        <Stack.Screen name="WebContainer" component={WebContainerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
