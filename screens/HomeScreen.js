/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import styled from 'styled-components';
import {NotificationIcon} from '../components/Icons';
import Card from '../components/Card';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Menu';
import Avatar from '../components/Avatar';
import {connect} from 'react-redux';
/*import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';*/
function mapStateToProps(state) {
  return {action: state.action, name: state.name};
}
function mapDispatchToProps(dispatch) {
  return {openMenu: () => dispatch({type: 'OPEN_MENU'})};
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1),
  };

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == 'openMenu') {
      Animated.parallel([
        Animated.timing(this.state.scale, {
          toValue: 0.9,
          duration: 300,
          easing: Easing.in(),
        }),
        Animated.timing(this.state.opacity, {
          toValue: 0.5,
          duration: 300,
        }),
      ]).start();
      StatusBar.setBarStyle('light-content', true);
    }
    if (this.props.action == 'closeMenu') {
      Animated.parallel([
        Animated.timing(this.state.scale, {
          toValue: 1,
          duration: 300,
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 300,
        }),
      ]).start();
      StatusBar.setBarStyle('light-content', true);
    }
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer
          style={{
            transform: [{scale: this.state.scale}],
            opacity: this.state.opacity,
          }}>
          <SafeAreaView>
            <ScrollView style={{height: '100%'}}>
              <TitleBar>
                <TouchableOpacity
                  onPress={this.props.openMenu}
                  style={{position: 'absolute', top: 0, left: 20}}>
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome Back</Title>
                <Name>{this.props.name}</Name>
                <NotificationIcon
                  style={{position: 'absolute', right: 20, top: 5}}
                />
              </TitleBar>
              <ScrollView
                horizontal={true}
                style={{
                  flexDirection: 'row',
                  padding: 20,
                  paddingLeft: 12,
                  paddingTop: 30,
                }}
                showsHorizontalScrollIndicator={false}>
                {logos.map((logo, index) => (
                  <Logo key={index} image={logo.image} text={logo.text} />
                ))}
              </ScrollView>

              <Subtitle>Continue Learning</Subtitle>
              <ScrollView
                horizontal={true}
                style={{paddingBottom: 30}}
                showsHorizontalScrollIndicator={false}>
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    title={card.title}
                    image={card.image}
                    caption={card.caption}
                    subtitle={card.subtitle}
                    logo={card.logo}
                  />
                ))}
              </ScrollView>
              <Subtitle>Popular Course</Subtitle>
              {courses.map((course, index) => (
                <Course
                  key={index}
                  image={course.image}
                  title={course.title}
                  subtitle={course.subtitle}
                  logo={course.logo}
                  author={course.author}
                  avatar={course.avatar}
                  caption={course.caption}
                />
              ))}
            </ScrollView>
          </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

//styling of each component
const RootView = styled.View`
  background-color: black;
  flex: 1;
`;
const Container = styled.View`
  background-color: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;

const logos = [
  {
    image: require('../assets/logo-framerx.png'),
    text: 'Framer X',
  },
  {
    image: require('../assets/logo-figma.png'),
    text: 'Figma',
  },
  {
    image: require('../assets/logo-studio.png'),
    text: 'Studio',
  },
  {
    image: require('../assets/logo-react.png'),
    text: 'React',
  },
  {
    image: require('../assets/logo-swift.png'),
    text: 'Swift',
  },
  {
    image: require('../assets/logo-sketch.png'),
    text: 'Sketch',
  },
];

const cards = [
  {
    title: 'React Native for Beginners',
    image: require('../assets/background11.jpg'),
    subtitle: 'React Native',
    caption: '1 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Styled Components',
    image: require('../assets/background12.jpg'),
    subtitle: 'React Native',
    caption: '2 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Props Icons',
    image: require('../assets/background13.jpg'),
    subtitle: 'React Native',
    caption: '3 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
  {
    title: 'Static Data and Loop',
    image: require('../assets/background14.jpg'),
    subtitle: 'React Native',
    caption: '4 of 12 sections',
    logo: require('../assets/logo-react.png'),
  },
];

const courses = [
  {
    title: 'Prototype in InvisionStudio',
    subtitle: '10sections',
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Kibocha',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'React for Designers',
    subtitle: '12 sections',
    image: require('../assets/background12.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Henry',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'Design and code with Framer X',
    subtitle: '10 sections',
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Wycliffe',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
  {
    title: 'Design System in Figma',
    subtitle: '10 sections',
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Pineapples',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site',
  },
];
