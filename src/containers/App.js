import React from 'react';
import './App.less';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}

export default App;
