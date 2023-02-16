import { useEffect, useState } from 'react';
import './styles.scss';
import { Header } from '../../components/Header/index';
import { Product } from '../../components/Product';
import { Footer } from '../../components/Footer';
import { DataCharacter } from '../../types/DataCharacter';
import { Character } from '../../types/Character';
// import api from '../../services/api';

export const Main = () => {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [foundCharacters, setFoundCharacters] = useState<Character[]>([]);
    const [characterSearched, setCharacterSearched] = useState("");

    useEffect(() => {
        // api.get("/character/27").then((response) => setCharacters(response.data))
        handleGetAllCharacters();
    }, []);

    const handleGetAllCharacters = async() => {
        setLoading(true);
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const json = await response.json();
        setLoading(false);
        setCharacters(json.results);
    };

    const handleGetCharacter = async() => {
        setLoading(true);
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterSearched}`);
        const json = await response.json();
        setLoading(false);
        setFoundCharacters(json.results);
    };

    const handleCharacterSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterSearched(event.target.value);
    };

    const handleButtonSearch = () => {
        handleGetCharacter();
    };

    return (
        <div className="main">
            {/* <Header /> */}
            <div className="header-two">
                <h1>The Rick and Morty API</h1>
            </div>
            <div className="products">
                <div className="character-search">
                    <input 
                        type="text" 
                        value={characterSearched ?? ""} 
                        onChange={handleCharacterSearch} 
                        placeholder="Search for the character name" 
                    />
                    <button onClick={handleButtonSearch}>Search</button>
                </div>

                {!loading && foundCharacters && characterSearched &&
                    foundCharacters.map((item, index) => (
                        <Product key={index} item={item} />
                    ))
                }
                
                {!loading && !characterSearched &&
                    characters.map((item, index) => (
                        <Product key={index} item={item} />
                    ))
                }

                {loading &&
                    <div className="loading">
                        <h2>Carregando...</h2>
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}