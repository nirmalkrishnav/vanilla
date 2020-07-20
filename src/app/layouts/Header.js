import React from 'react';
import Navbar from './Navbar';

class Header extends React.Component {

    render() {

        return (
            <nav>
                <Navbar />
                <h2>
                    <span role="img" aria-label="vanilla">🍦</span>
                    Vanilla <span role="img" aria-label="heart">💓</span>
                </h2>
            </nav>
        )
    }

}

export default Header;