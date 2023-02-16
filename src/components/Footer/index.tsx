import { useState, useEffect } from 'react';
import { DataCharacter } from '../../types/DataCharacter';
import './styles.scss';
import logoNetlify from '../../assets/logoNetlify.png';
import logoStellate from '../../assets/logoStellate.jpg';
import logoGithub from '../../assets/logoGithub.png';
import logoLinkedin from '../../assets/logoLinkedin.png';
import logoHeart from '../../assets/logoHeart.png';

export const Footer = () => {
    // const [charactersInfo, setCharactersInfo] = useState<DataCharacter[]>([]);
    // const [locationsInfo, setLocationsInfo] = useState([]);
    // const [episodesInfo, setEpisodesInfo] = useState([]);

    // useEffect(() => {
    //     handleGetAllCharacters();
    //     handleGetAllLocations();
    //     handleGetAllEpisodes();
    // }, []);

    // const handleGetAllCharacters = async() => {
    //     const response = await fetch('https://rickandmortyapi.com/api/character');
    //     const data = await response.json();
    //     setCharactersInfo(data);
    // };

    // const handleGetAllLocations = async() => {
    //     const response = await fetch('https://rickandmortyapi.com/api/location');
    //     const data = await response.json();
    //     setLocationsInfo(data);
    // };

    // const handleGetAllEpisodes = async() => {
    //     const response = await fetch('https://rickandmortyapi.com/api/episode');
    //     const data = await response.json();
    //     setEpisodesInfo(data);
    // };

    // console.log(charactersInfo[0].info.count);

    return (
        <div className="footer">
            <div className="general-infos">
                <p>CHARACTERS: {`tantos`}</p>
                <p>LOCATIONS: {`tantos`}</p>
                <p>EPISODES: {`tantos`}</p>
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
                <img src={logoGithub} alt="" />
                <img src={logoLinkedin} alt="" />
                <img src={logoHeart} alt="" />
            </div>
            <div className="developed-by">
                <p>{`<> by`}</p>
                <a href="https://github.com/SamuelGaitkoski" target="_blank">Samuel Gaitkoski</a>
                <p>2023</p>
            </div>
        </div>
    );
}