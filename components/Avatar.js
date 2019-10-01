import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {Header} from 'react-native/Libraries/NewAppScreen';

function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: 'UPDATE_NAME',
        name: name,
      }),
  };
}
class Avatar extends React.Component {
  state = {
    photo: 'https://share.getcloudapp.com/DOuGe6DP',
  };
  componentDidMount() {
    fetch('https://uifaces.co/api?limit=10&emotion[]=happiness', {
      headers: new Headers({
        'X-API-KEY': 'fa2d95b70608c8da58d821446e6510',
      }),
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          photo: response[0].photo,
        });
        this.props.updateName(response[0].name);
      });
  }
  render() {
    return <Image source={{uri: this.state.photo}} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Avatar);
const Image = styled.Image`
  height: 44px;
  width: 44px;
  border-radius: 22px;
`;
