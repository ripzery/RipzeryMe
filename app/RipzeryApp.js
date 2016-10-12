import React from 'react';
import Typist from 'react-typist';

const styles = {
    centered: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    }
};

class RipzeryApp extends React.Component {
    constructor(){
        super();
        this.cursor = {
            show: true,
            blink: true,
            element: ':P',
            hideWhenDone: true,
            hideWhenDoneDelay: 1000
        }
    }
    render() {
        return (
            <div style={styles.centered}>
                <h1>
                    <Typist avgTypingSpeed={4} startDelay={2000} cursor={this.cursor}>
                        Well...well
                    </Typist>
                </h1>
            </div>
        )
    }
}

export default RipzeryApp