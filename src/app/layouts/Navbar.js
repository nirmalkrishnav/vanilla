import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCalculator, AiFillCrown, AiFillFire, AiOutlineMore } from 'react-icons/ai';
import { BsFillDiamondFill } from 'react-icons/bs';
import { IconContext } from "react-icons";


class Navbar extends React.Component {
    render() {
        return (
            <div className="flex flex-row content-start justify-around items-center px-3">
                <div>
                    <IconContext.Provider value={{ color: "black", size: "32px" }}>
                        <div>
                            <AiFillCalculator />
                        </div>
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ color: "black", size: "32px" }}>
                        <div>
                            <AiFillCrown />
                        </div>
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ color: "black", size: "32px" }}>
                        <div>
                            <AiFillFire />
                        </div>
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ color: "black", size: "32px" }}>
                        <div>
                            <BsFillDiamondFill />
                        </div>
                    </IconContext.Provider>
                </div>
                <div>
                    <IconContext.Provider value={{ color: "black", size: "32px" }}>
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