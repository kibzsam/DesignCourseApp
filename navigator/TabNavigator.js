import React from 'react';
//import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import SectionScreen from '../screens/SectionScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import CoursesScreen from '../screens/CoursesScreen';
import ProjectScreen from '../screens/ProjectScreen';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const activeColor = '#4775f2';
const inactiveColor = '#b8bece';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
  },
  {
    mode: 'modal',
  },
);
HomeStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;
  if (routeName === 'Section') {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
      <Icon
        name="ios-home"
        size={26}
        color={focused ? activeColor : inactiveColor}
      />
    ),
  };
};
const CoursesStack = createStackNavigator({
  Course: CoursesScreen,
});
CoursesStack.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({focused}) => (
    <Icon
      name="ios-albums"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};
const ProjectsStack = createStackNavigator({
  Project: ProjectScreen,
});

ProjectsStack.navigationOptions = {
  tabBarLabel: 'Projects',
  tabBarIcon: ({focused}) => (
    <Icon
      name="ios-folder"
      size={26}
      color={focused ? activeColor : inactiveColor}
    />
  ),
};
const TabNavigator = createMaterialBottomTabNavigator(
  {
    HomeStack,
    CoursesStack,
    ProjectsStack,
  },
  {
    barStyle: {backgroundColor: '#ffff'},
  },
);

export default TabNavigator;
