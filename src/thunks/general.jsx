import history from "../store/History.jsx";

export const init = () => (dispatch, getState) => {
    dispatch({ type: 'INIT_BEGIN' });
    dispatch({ type: 'INIT_END' });
    // dispatch({ type: 'SHOWMODAL', payload: {title: 'Example', text : "Lorem ipsum in dolor"} });
};

export const toggleModal = show => dispatch => {
    dispatch({ type: 'TOGGLEMODAL', payload: {show: show} });
};
