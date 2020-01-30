import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import appSystemReducer from "./reducers/appSystem.jsx";
import modalReducer from "./reducers/modal.jsx";
import drupalFavoritesReducer from "./reducers/drupalFavorites.jsx";


import thunk from "redux-thunk";

const defaultStore = {
    app: {
        system : {
            name: 'DashboardReactJS',
            ready: false,
        },
    },
    drupal : {
        favorites : [
            { nid: "1", title: 'Article 1', path: "/", description: "" },
        ]
    },
    modal: {
        show: false,
        title: '',
        text: ''
    }
};


const appReducer = combineReducers({
    system : appSystemReducer
});

const drupalReducer = combineReducers({
    favorites : drupalFavoritesReducer
});


const rootReducer = combineReducers({
    app: appReducer,
    modal: modalReducer,
    drupal: drupalReducer
});

let composeEnhancers = compose;

export const store = createStore(
    rootReducer,
    defaultStore,
    composeEnhancers(applyMiddleware(thunk))
);
