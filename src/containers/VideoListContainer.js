import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';


// var VideoListContainer = connect() => {};
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.


mapStateToProps = (state) => {
  console.log(state);
  return {
    videos: state.videoList
  }

};

mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (videos) => {
//not sure how to set this up
//reference click
      dispatch(changeVideo(video))
    }
  }
};


var VideoListContainer = connect(
  mapStateToProps, mapDispatchToProps
)(VideoList);


export default VideoListContainer;
