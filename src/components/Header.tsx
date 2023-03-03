import '../styles/header.scss';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import LogoHeader from '../assets/logoHeader.png';

type Props = {
    onChangeTheme: (mode: "light" | "dark") => void;
}

export const Header = ({ onChangeTheme }: Props) => {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const handleModeButton = () => {
        mode === "light" ? setMode("dark") : setMode("light");
        onChangeTheme(mode);
    }

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
                        <button 
                            className="button-mode" 
                            onClick={handleModeButton}
                            style={{backgroundColor: mode === "light" ? "#FFF" : "#000000CC",
                                    color: mode === "light" ? "#333" : "#FFF",
                                    border: mode === "light" ? "1px solid #bebebe" : "none"}}
                        >
                            {`${mode.toUpperCase()}`}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};