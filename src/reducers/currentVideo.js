import Redux from 'redux';

var currentVideoReducer = (state=null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  //actions? search and select
  //Fixed name to pass test**
  if (action.type === 'CHANGE_VIDEO') {
    return action.video;
  }
  return state;
};

export default currentVideoReducer;
