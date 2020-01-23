const initialState = {
    buttonClicked: false,
    isLoading: false,
    businessList: [],
    error: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUTTON_CLICKED':
            return {
                ...state,
                buttonClicked: !state.buttonClicked
            };
        default:
            return state;
    }
};
