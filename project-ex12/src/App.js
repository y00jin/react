import React, { Fragment, Component } from 'react';

class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            loginInfo: {
                email: '',
                password: ''
            }
        }
    }

    onLoginSubmit(evnet) {
        event.preventDefault();
        console.log(event.target.email.value + ":" + event.target.password.value);
    }

    render() {
        return (
            <form onSubmit={this.onLoginSubmit.bind(this)}>
                <div>
                    이메일: <input name='email' type='text' />
                </div>
                <br/>
                <div>
                    비밀번호: <input name='password' type='password'/>
                </div>
                <button type='submit'>로그인</button>
            </form>
        );
    }
}

export { App };