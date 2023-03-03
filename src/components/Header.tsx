import '../styles/header.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoHeader from '../assets/logoHeader.png';

// type Props = {
//     onClick: (mode: "light" | "dark") => void;
// }

export const Header = (/*{ onClick }: Props*/) => {
    // const [mode, setMode] = useState();

    return (
        <div className="header">
            <img src={LogoHeader} alt="" />
            <div>
                <ul>
                    <li>
                        <Link to="/documentation">Docs</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to='/support-us' className="button-support-us">SUPPORT US</Link>
                    </li>
                    <li>
                        <button className="button-mode">{`DARK MODE`}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};