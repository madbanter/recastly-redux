import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


// var VideoListContainer = connect() => {};
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

mapStateToProps = (state) => {
  return {

  }

};

mapDispatchToProps = (dispatch) => {
  return {

  }

};


var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


export default VideoListContainer;
