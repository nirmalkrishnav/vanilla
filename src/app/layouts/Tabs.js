import React from 'react';
import './layout.scss';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaBookOpen, FaDumbbell, FaUserAstronaut } from 'react-icons/fa';

class Tabs extends React.Component {
    render() {
        return (
            <div className="flex felx-row content-start justify-between items-center p-3 border-solid border-t-2 border-x border-lightgray">
                <div className="tab-item text-orange-500">

                    <Link to="/home">
                        <IconContext.Provider value={{ size: "32px", }}>
                            <FaDumbbell />
                        </IconContext.Provider>
                    </Link>

                </div>
                <div className="tab-item">
                    <Link to="/quiz">
                        <IconContext.Provider value={{ size: "32px", }}>
                            <FaBookOpen />
                        </IconContext.Provider>
                    </Link>
                </div>
                <div className="tab-item">
                    <Link to="/about">
                        <IconContext.Provider value={{ size: "32px", }}>
                            <FaUserAstronaut />
                        </IconContext.Provider>
                    </Link>
                </div>
            </div>
        )

    }
}

export default Tabs;