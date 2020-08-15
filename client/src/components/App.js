import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        members: ['N’Pepo', 'N’Eye', 'N’Maxky', 'N’Mix', 'N’Pin', 'N’Film'],
        msg: '_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _',
        times: 30,
        range: 60,
        cnt: 0,
        myInterval: null,
    };
    random() {
        const callback = () => {
            const ran = Math.floor(Math.random() * this.state.members.length);
            this.setState({
                msg: this.state.members[ran],
                cnt: this.state.cnt + 1,
            });
        };
        this.setState({ myInterval: setInterval(callback, this.state.range) });
    }

    componentDidUpdate() {
        if (this.state.cnt >= this.state.times) {
            this.setState({ cnt: 0 });
            clearInterval(this.state.myInterval);
        }
    }

    render() {
        return (
            <div className="landing">
                <h1>CS First Date Random Machine</h1>
                <h2>{this.state.msg}</h2>
                <button
                    className="btn"
                    onClick={() => {
                        this.random();
                    }}
                >
                    Random
                </button>
            </div>
        );
    }
}

export default App;
