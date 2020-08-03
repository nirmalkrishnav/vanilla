import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillCalculator, AiFillCrown, AiFillFire, AiOutlineMore } from 'react-icons/ai';
import { IconContext } from "react-icons";
import './layout.scss';


class Navbar extends React.Component {
    render() {
        return (
            <div className="flex flex-row content-start justify-between items-center p-3 top-tabs">
                <div>
                    <IconContext.Provider value={{ color: "#afafaf", size: "32px" }}>
                        <AiFillCalculator />
                    </IconContext.Provider>
                </div>
                <div className="flex">
                    <IconContext.Provider value={{ color: "#afafaf", size: "32px" }}>
                        <AiFillCrown />
                    </IconContext.Provider>
                    0
                </div>
                <div className="flex">
                    <IconContext.Provider value={{ color: "#afafaf", size: "32px" }}>
                        <AiFillFire />
                    </IconContext.Provider>
                    0
                </div>
                <div className="flex">
                    <IconContext.Provider value={{ color: "#afafaf", size: "32px" }}>
                        <AiFillGithub />
                    </IconContext.Provider>
                    0
                </div>
                <div>
                    <IconContext.Provider value={{ color: "#afafaf", size: "32px" }}>
                        <div>
                            <AiOutlineMore />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        )

    }
}

export default Navbar;