import { combineReducers } from 'redux';
//added Reducer to import tag
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

//combine reducers



var rootReducer = combineReducers({
    videoListReducer,
    currentVideoReducer
  });

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
