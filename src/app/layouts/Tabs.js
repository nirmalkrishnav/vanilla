import React from 'react';
import './layout.scss';
import { Link } from 'react-router-dom';

class Tabs extends React.Component {
    render() {
        return (
            <div className="bottom-tabs">
                <div className="tab-item">
                    <Link to="/home">Home</Link>
                </div>
                <div className="tab-item">
                    Stories
                </div>
                <div className="tab-item">
                  
                    <Link to="/about">About</Link>

                </div>
            </div>
        )

    }
}

export default Tabs;