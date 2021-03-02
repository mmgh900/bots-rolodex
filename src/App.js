import logo from './logo.svg';
import './App.css';
import {Component} from "react";


const txtgen = require('txtgen');

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            monsters: []
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => {
                response.json()
            })
            .then(users => this.setState({monsters: users}))
    }

    render() {

        return (
            <div className="App">
                {this.state.monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        );
    }
}

export default App;
