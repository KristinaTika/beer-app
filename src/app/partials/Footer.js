import React, { Component } from 'react';
import './Partials.css';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            timer: "pending"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    render() {
        const { timer } = this.state;
        return (
            <footer>
                <p>CurrentTime: {timer}</p>
                <p>Copyright &#169; {new Date().getFullYear()} by Kristina Butkovic</p>
            </footer>
        );
    }
};

export default Footer;