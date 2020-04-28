import React from 'react';
class App extends React.Component {
    render() {
        const message = 'Hello React';
        return (
            <h1 className="">{ message }</h1>
        );
    }
}

export { App };