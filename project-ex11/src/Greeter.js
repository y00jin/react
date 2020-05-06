import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Greeter extends Component {
    render() {
        return (
            <h1>Hello {this.props.name }</h1>
        );
    }
}

// Prop Validator

Greeter.propTypes = {
    name: PropTypes.string.isRequired
}

Greeter.defaultProps = {
    name:'둘리의 친구'
}