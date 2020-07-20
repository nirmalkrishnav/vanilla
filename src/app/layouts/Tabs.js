import React from 'react';
import './layout.scss';
import { FaBeer } from 'react-icons/fa';
import { IconContext } from "react-icons";

class Tabs extends React.Component {
    render() {
        return (
            <div className="bottom-tabs">
                <div className="tab-item">
                    Learnen
                </div>
                <div className="tab-item">
                    Stories
                </div>
                <div className="tab-item">
                    <IconContext.Provider value={{ color: "sandybrown" }}>
                        <div>
                            <FaBeer />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        )

    }
}

export default Tabs;