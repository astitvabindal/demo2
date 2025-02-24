import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/screen/HomeScreen';
import HistoryScreen from './src/screen/HistoryScreen';
const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="History" component={HistoryScreen} />
  </Drawer.Navigator>
   </NavigationContainer>
  );
};

export default App;

