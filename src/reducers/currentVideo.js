import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //actions? search and select
  //Fixed name to pass test**
  let copyState = {...state};
  if (action.type === 'CHANGE_VIDEO') {
    copyState.video = action.video;
  }
  return copyState;
};

export default currentVideoReducer;
