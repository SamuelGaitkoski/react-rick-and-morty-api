import { useState } from 'react';
import './styles.scss';
import LogoHeader from '../../assets/logoHeader.png';

type Props = {
    toggleMode(): void;
}

export const Header = (props: Props) => {
    const [mode, setMode] = useState("");

    return (
        <div className="header">
            <img src={LogoHeader} alt="" />
            <div>
                <ul>
                    <li>
                        <a href="https://rickandmortyapi.com/documentation/">Docs</a>
                    </li>
                    <li>
                        <a href="https://rickandmortyapi.com/about/">About</a>
                    </li>
                    <li>
                        <button className="button-support-us">SUPPORT US</button>
                    </li>
                    <li>
                        <button 
                            className="button-mode" 
                            onClick={props.toggleMode}
                            style={{
                                backgroundColor: mode === "light" ? "#FFF" : "#000",
                                color: mode === "light" ? "#000" : "#FFF"
                            }}
                        >{`${mode.toUpperCase()} MODE`}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};