import React from 'react';
import Greeter from './Greeter';

export default class App extends React.Component {
    render() {
        return (
            <div className='App'>
                <Greeter name='둘리'/>
                <Greeter name='또치'/>
            </div>
        );
    }
}