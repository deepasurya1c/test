import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './tab/Home';
import CreateUser from './tab/CreateUser';
import About from './tab/About';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

export default function Tabbar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'md-home'
          } else if (route.name === 'About') {
            iconName = 'md-information-circle';
          } else {
            iconName = 'md-add-circle'
          }
          return <Ionicons name={iconName} size={20} color={"#111E6C"} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#111E6C',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="CreateUser" component={CreateUser} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}