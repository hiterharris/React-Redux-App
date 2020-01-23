import React from 'react';
import '../App.css';

import Restaurant from './Restaurant';

import {connect} from 'react-redux';

const RestaurantList = props => {
    console.log(props);
  return (
    <div className="RestaurantList">
      <Restaurant />
    </div>
  );
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        businessList: state.businessList,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {}
)(RestaurantList);
