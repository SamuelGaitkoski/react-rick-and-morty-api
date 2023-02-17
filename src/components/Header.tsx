import '../styles/header.scss';

import { useState } from 'react';

import LogoHeader from '../assets/logoHeader.png';

export const Header = () => {
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
                        <button className="button-mode">{`DARK MODE`}</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};