import '../styles/main.scss';

import { useEffect, useState } from 'react';

import { Header } from '../components/Header';
import { Product } from '../components/Product';
import { Footer } from '../components/Footer';

import { Character } from '../types/Character';

import { api } from '../services/api';

export const Main = () => {
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [foundCharacters, setFoundCharacters] = useState<Character[]>([]);
    const [characterSearched, setCharacterSearched] = useState("");

    useEffect(() => {
        // api.get("/character/27").then((response) => setCharacters(response.data))
        handleGetAllCharacters();
    }, []);

    const handleGetAllCharacters = async () => {
        setLoading(true);
        let json = await api.getAllCharacters();
        setLoading(false);
        setCharacters(json.results);
    };

    const handleGetCharacter = async (name: string) => {
        setLoading(true);
        let json = await api.getCharacterByName(name);
        setLoading(false);
        setFoundCharacters(json.results);
    };

    const handleCharacterSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterSearched(event.target.value);
    };

    const handleButtonSearch = () => {
        handleGetCharacter(characterSearched);
    };

    return (
        <div className="main">
            <Header />
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