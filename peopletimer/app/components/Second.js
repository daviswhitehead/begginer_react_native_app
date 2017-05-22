import React, { Component } from "react";

import {
    View,
    Text,
    TouchableOpacity,
    ListView,
    StyleSheet
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as strings from "../actions/strings";

class PrintString extends Component {
    static navigationOptions = {
        title: "Print String"
    };

    render() {
        return (
            <Text>Second</Text>
        );
    }
}

export default connect(
    state => ({
        sayHello: state.strings.sayHello
    }),
    dispatch => bindActionCreators(strings, dispatch)
)(PrintString);
