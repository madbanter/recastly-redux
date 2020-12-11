import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleInputChange from '../actions/search.js';

var mapStateToProps = (state) => ({

});

var mapDispatchToProps = (dispatch) => {
  handleInputChange: (q) => {
    dispatch(handleInputChange(q));
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
