import React from 'react';
import '../App.css';

import Restaurant from './Restaurant';

import {connect} from 'react-redux';
import {buttonClicked} from '../actions';

const RestaurantList = props => {
    console.log(props);
  return (
    <div className="RestaurantList">
      <Restaurant />
      <button onClick={props.buttonClicked}>Update State</button>
    </div>
  );
}

const mapStateToProps = state => {
    console.log(state);
    return {
        buttonClicked: state.buttonClicked,
        isLoading: state.isLoading,
        businessList: state.businessList,
        error: state.error,
    }
}

export default connect(
mapStateToProps,
{buttonClicked}
)(RestaurantList);
