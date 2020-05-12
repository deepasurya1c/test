


import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Welcome from './app/screens/Welcome';
import Login from './app/screens/Login';
import Signup from './app/screens/Signup';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './app/screens/tab/Home';
import CreateUser from './app/screens/tab/CreateUser';
import About from './app/screens/tab/About';

// import Tabbar from './app/screens/Tab';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();


function Tabbar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CreateUser" component={CreateUser} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Tabbar} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
