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
                <p style={styles.textWhite} className="flow-text" >
                    <Typist startDelay={2000} cursor={this.cursorHide}>
                        "They say that a kingdom is like a pyramid: the king on top and the people below. But in this country it’s upside down"
                    </Typist>
                </p>
                <p style={styles.textWhite} className="flow-text">
                    <Typist startDelay={14000} cursor={this.cursorHide}>
                        the king said, he pointed to his shoulder.
                    </Typist>
                </p>
                <p style={styles.textWhite} className="flow-text">
                    <Typist startDelay={17000} cursor={this.cursorHide}>
                        “That’s why I sometimes have a pain around here.”
                    </Typist>
                </p>
                <br />
                <p style={styles.textWhite}>
                    <Typist startDelay={21000} cursor={this.cursorHide}>
                        -- Forever be our king --
                    </Typist>
                </p>
                <p style={styles.textWhite}>
                    <Typist startDelay={24000} cursor={this.cursorHide}>
                        October 13, 2016
                    </Typist>
                </p>
                <a style={styles.textWhite} href="https://blog.ripzery.me">
                    <u>
                        <Typist startDelay={27000} cursor={this.cursorHide}>
                            Ripzery.me
                        </Typist>
                    </u>
                </a>
            </div>
        )
    }
}

export default RipzeryApp