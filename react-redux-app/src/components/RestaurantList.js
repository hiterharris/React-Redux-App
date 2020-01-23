import React from 'react';
import '../App.css';

import {connect} from 'react-redux';
import {buttonClicked, fetchRestaurantList} from '../actions';

const RestaurantList = props => {
    props.fetchRestaurantList();

    return (
            <div className="RestaurantList">
                {props.restaurantList.splice(1).map((restaurant) => {
                    return (
                        <div className='restaurant'>
                            <div className='heading'>
                                <h1>{restaurant.name}</h1>
                                <p>{restaurant.categories[0].title}</p>
                                <div className='rating'>
                                    <p>Rating: {restaurant.rating}</p>
                                    <p>(    {restaurant.review_count} reviews)</p>
                                </div>
                            </div>
                            <img src={restaurant.image_url} />
                        </div>
                    );
                })}
            </div>
        );
    }

    const mapStateToProps = state => {
        return {
            buttonClicked: state.buttonClicked,
            isLoading: state.isLoading,
            restaurantList: state.restaurantList,
            error: state.error,
        }
    }

export default connect(
    mapStateToProps,
    {buttonClicked, fetchRestaurantList}
)(RestaurantList);
