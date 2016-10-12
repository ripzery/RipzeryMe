import React from 'react';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import RipzeryApp from './RipzeryApp'

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider >
                <RipzeryApp />
            </MuiThemeProvider>
        );
    }
}

export default App