var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: 'CHANGE_VIDEO_LIST',
  payload: videos,
  // payload: {
  //   videos: videos
  // }
});

export default changeVideoList;
