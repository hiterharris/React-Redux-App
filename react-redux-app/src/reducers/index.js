const initialState = {
    buttonClicked: false,
    isLoading: false,
    restaurantList: [],
    error: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON_CLICKED':
            return {
                ...state,
                buttonClicked: !state.buttonClicked
            };
        case 'FETCH_RESTAURANT_LIST':
        return {
            ...state,
            restaurantList: action.payload
        }
        default:
            return state;
    }
};
