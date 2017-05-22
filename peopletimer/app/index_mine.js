import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import Routes from "./config/routes";

import getStore from "./store";



const AppNavigator = StackNavigator(Routes, {
    navigationOptions: {
        title: ({ state }) => {
            if (state.params) {
                return `${state.params.title}`;
            }
        }
    }
});

const navReducer = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return newState || state;
};

class App extends Component {
    render() {
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />
        );
    }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(App);

const store = getStore(navReducer);

class Root extends Component {
  render() {
    return (
        <Provider store={store}>
            <AppWithNavigationState />
        </Provider>
    );
  }
}

export default Root;
