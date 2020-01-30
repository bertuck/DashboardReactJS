import React, { Component } from 'react';
import { Router, Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import CustomModal from "./components/CustomModal.jsx";
import Loading from "./components/Loading.jsx";

import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

import {init} from "./thunks/general.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.props.init();
    }

    render() {
        return (
            <div>
                <Loading />
                <h1 className="text-center">{this.props.appName}</h1>
                <CustomModal />
                <Switch>
                    <Route exact component={Home} path="/" />
                    <Route component={NotFound}  />
                </Switch>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    init: (firebase) => dispatch(init(firebase))
});


const mapStateToProps = (state, history) => ({
    ready: state.app.system.ready,
    appName: state.app.system.name
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
