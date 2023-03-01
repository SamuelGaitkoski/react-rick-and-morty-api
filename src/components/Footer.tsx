import '../styles/footer.scss';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GithubLogo, LinkedinLogo, Heart } from 'phosphor-react';

import { api } from '../services/api';

import logoNetlify from '../assets/logoNetlify.png';
import logoStellate from '../assets/logoStellate.jpg';
import logoGithub from '../assets/logoGithub.png';
import logoLinkedin from '../assets/logoLinkedin.png';
import logoHeart from '../assets/logoHeart.png';

export const Footer = () => {
    const [charactersInfo, setCharactersInfo] = useState<number>(0);
    const [locationsInfo, setLocationsInfo] = useState<number>(0);
    const [episodesInfo, setEpisodesInfo] = useState<number>();

    useEffect(() => {
        loadAllCharacters();
        loadAllLocations();
        loadAllEpisodes();
    }, []);

    const loadAllCharacters = async () => {
        let json = await api.getAllCharacters();
        setCharactersInfo(json.info.count);
    };

    const loadAllLocations = async () => {
        let json = await api.getAllLocations();
        setLocationsInfo(json.info.count);
    };

    const loadAllEpisodes = async () => {
        let json = await api.getAllEpisodes();
        setEpisodesInfo(json.info.count);
    };

    return (
        <div className="footer">
            <div className="general-infos">
                <p>CHARACTERS: {charactersInfo}</p>
                <p>LOCATIONS: {locationsInfo}</p>
                <p>EPISODES: {episodesInfo}</p>
            </div>
            <div className="server-status">
                <p>SERVER STATUS</p>
                <div></div>
            </div>
            <div className="logos">
                <img src={logoNetlify} alt="" />
                <img src={logoStellate} alt="" />
            </div>
            <div className="social-media">
                <a href="https://github.com/SamuelGaitkoski" target="_blank">
                    <GithubLogo weight="fill" />
                </a>
                <a href="https://br.linkedin.com/in/samuel-gaitkoski-375385203" target="_blank">
                    <LinkedinLogo weight="fill" />
                </a>
                <Link to="/support-us">
                    <Heart weight="fill" />
                </Link>
            </div>
            <div className="developed-by">
                <p>{`<> by`}</p>
                <a href="https://github.com/SamuelGaitkoski" target="_blank">Samuel Gaitkoski</a>
                <p>2023</p>
            </div>
        </div>
    );
}