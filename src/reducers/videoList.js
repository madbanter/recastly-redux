import Redux from 'redux';

var videoListReducer = (state=sampleData, action) => {
  //TODO: define a reducer for the videoList field of our state.

  //actions? search
  // let copyState = {...state};
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  }
  return state;
};


export default videoListReducer;
