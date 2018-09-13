import React, {Component} from 'react';
import Router from './Router';
import Navigation from './navigation/Navigation';


class App extends Component {
    render() {
        return <div>
                <Navigation />
                <Router/>

            </div>

    }
}

export default App;
