import React from 'react';
import Typist from 'react-typist';

const styles = {
    centered: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    textWhite: {
        color: "white"
    }
};

class RipzeryApp extends React.Component {
    constructor() {
        super();
        this.cursor = {
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 500
        };
        this.cursorHide = {
            show: false,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 500
        }
    }

    render() {
        return (
            <div style={styles.centered}>
                <h2 style={styles.textWhite}>
                    <Typist startDelay={2000} cursor={this.cursor}>
                        Today, many people think there is no miracle
                    </Typist>
                </h2>
                <h2 style={styles.textWhite}>
                    <Typist startDelay={6000} cursor={this.cursorHide}>
                        But one says
                    </Typist>
                </h2>
                <h1 style={styles.textWhite}>
                    <Typist startDelay={7500} cursor={this.cursorHide}>
                        "We already had miracle for 70 years"
                    </Typist>
                </h1>
                <br />
                <h3 style={styles.textWhite}>
                    <Typist avgTypingSpeed={400} startDelay={12000} cursor={this.cursorHide}>
                        -- Forever be our king --
                    </Typist>
                </h3>
                <h3 style={styles.textWhite}>
                    <Typist stdTypingDelay={200} startDelay={14000} cursor={this.cursorHide}>
                        October 13, 2016
                    </Typist>
                </h3>
                <a style={styles.textWhite} href="https://blog.ripzery.me">
                    <u>
                        <Typist startDelay={18000} cursor={this.cursorHide}>
                            Ripzery.me
                        </Typist>
                    </u>
                </a>
            </div>
        )
    }
}

export default RipzeryApp