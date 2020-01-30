const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FAVORITES':
            return {...state, favorites: action.payload.favorites };
    }
    return state;
};

export default reducer;
