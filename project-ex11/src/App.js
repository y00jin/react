import React, { Fragment, Component } from 'react';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            keyword:'',
            contents:'',
            birthYear:1985
        }
    }
    
    onInputChanged() {
        // console.log(event.target.value);
        this.setState({
            keyword: event.target.value.substr(0,5)
        });
    }
    
    onTextareaChanged() {
        this.setState({
            contents: event.target.value
        });
    }

    onSelectChanged() {
        this.setState({
            birthYear: event.target.value
        });
    }

    render() {
        return (
            <Fragment>
                <div>
                    검색: <input type='text' value={this.state.keyword} onChange={this.onInputChanged.bind(this)}/>
                </div>
                <br/>
                <div>
                    내용: <textarea value={ this.state.contents } onChange={this.onTextareaChanged.bind(this)}></textarea>
                </div>
                <div>
                    생년:
                    <select value={this.state.birthYear} onChange={this.onSelectChanged.bind(this)}>
                        <option value='1984'>1984년</option>
                        <option value='1985'>1985년</option>
                        <option value='1986'>1986년</option>
                    </select>
                </div>
            </Fragment>
        );
    }
}

export { App };