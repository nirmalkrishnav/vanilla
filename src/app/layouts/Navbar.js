import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/home">Home</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </div>
        )

    }
}

export default Navbar;