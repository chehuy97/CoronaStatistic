import {Image} from 'react-native';
import React from 'react';
import TableScreen from '../screens/TableScreen';
import MapScreen from '../screens/MapScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Table"
          component={TableScreen}
          options={{
            tabBarLabel: 'Table',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/images/icons/table.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/images/icons/global.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
