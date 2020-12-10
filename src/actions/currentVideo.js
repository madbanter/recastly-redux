var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  //Changed name to make test pass**
  type: 'CHANGE_VIDEO',
  video
  // payload: {
  //   video: video
  // }
});

export default changeVideo;
