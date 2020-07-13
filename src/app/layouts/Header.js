import React from 'react';

class Header extends React.Component {

    render() {

        return (
            <nav>
                <h2>
                    <span role="img" aria-label="vanilla">🍦</span>
                    Vanilla <span role="img" aria-label="heart">💓</span>
                </h2>
            </nav>
        )
    }

}

export default Header;