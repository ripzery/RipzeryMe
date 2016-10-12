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
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 500
        }
    }
    render() {
        return (
            <div style={styles.centered}>
                <h1>
                    <Typist avgTypingSpeed={4} startDelay={2000} cursor={this.cursor}>
                        Hi hi. I'm still working on this...
                    </Typist>
                </h1>
            </div>
        )
    }
}

export default RipzeryApp