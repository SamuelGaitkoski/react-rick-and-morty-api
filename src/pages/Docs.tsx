import '../styles/docs.scss';

import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Header } from '../components/Header';
import { Product } from '../components/Product';
import { Footer } from '../components/Footer';

import { DataCharacter } from '../types/DataCharacter';
import { Character } from '../types/Character';

import { api } from '../services/api';

const codeString1 = `
query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
        count
    }
    results {
        name
    }
  }
  location(id: 1) {
    id
  } 
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;

const codeString2 = `GET https://rickandmortyapi.com/api`;

const codeString3 = `{
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}
`;

const codeString4 = `GET https://rickandmortyapi.com/api/character`;

const codeString5 = `{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    // ...
  ]
}
`;

const codeString6 = `GET https://rickandmortyapi.com/api/character/?page=19`;

const codeString7 = `{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=20",
    "prev": "https://rickandmortyapi.com/api/character/?page=18"
  },
  "results": [
    {
      "id": 361,
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's Toxic Side",
      "gender": "Male",
      "origin": {
        "name": "Alien Spa",
        "url": "https://rickandmortyapi.com/api/location/64"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/27"
      ],
      "url": "https://rickandmortyapi.com/api/character/361",
      "created": "2018-01-10T18:20:41.703Z"
    },
    // ...
  ]
}
`;

const codeString8 = `GET https://rickandmortyapi.com/api/character`;

const codeString9 = `{
  "info": {
    "count": 826,
    "pages": 42,
    "next": "https://rickandmortyapi.com/api/character/?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    // ...
  ]
}
`;

const codeString10 = `GET https://rickandmortyapi.com/api/character/2`;

const codeString11 = `{
  "id": 2,
  "name": "Morty Smith",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Earth",
    "url": "https://rickandmortyapi.com/api/location/20"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/character/2",
  "created": "2017-11-04T18:50:21.651Z"
}
`;

const codeString12 = `GET https://rickandmortyapi.com/api/character/1,183`;

const codeString13 = `[
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  },
  {
    "id": 183,
    "name": "Johnny Depp",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
    "name": "Earth (C-500A)",
    "url": "https://rickandmortyapi.com/api/location/23"
    },
    "location": {
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/183",
    "created": "2017-12-29T18:51:29.693Z"
  }
]
`;

const codeString14 = `GET https://rickandmortyapi.com/api/character/?name=rick&status=alive`;

const codeString15 = `{
  "info": {
    "count": 29,
    "pages": 2,
    "next": "https://rickandmortyapi.com/api/character/?page=2&name=rick&status=alive",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Rick Sanchez",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        //...
      ],
      "url": "https://rickandmortyapi.com/api/character/1",
      "created": "2017-11-04T18:48:46.250Z"
    },
    // ...
  ]
}
`;

const codeString16 = `GET https://rickandmortyapi.com/api/location`;

const codeString17 = `{
  "info": {
    "count": 126,
    "pages": 7,
    "next": "https://rickandmortyapi.com/api/location?page=2",
    "prev": null
  },
  "results": [
    {
      "id": 1,
      "name": "Earth",
      "type": "Planet",
      "dimension": "Dimension C-137",
      "residents": [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/location/1",
      "created": "2017-11-10T12:42:04.162Z"
    }
    // ...
  ]
}
`;

const codeString18 = `GET https://rickandmortyapi.com/api/location/3`;

const codeString19 = `{
  "id": 3,
  "name": "Citadel of Ricks",
  "type": "Space station",
  "dimension": "unknown",
  "residents": [
    "https://rickandmortyapi.com/api/character/8",
    "https://rickandmortyapi.com/api/character/14",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/location/3",
  "created": "2017-11-10T13:08:13.191Z"
}
`;

const codeString20 = `GET https://rickandmortyapi.com/api/location/3,21`;

const codeString21 = `[
  {
    "id": 3,
    "name": "Citadel of Ricks",
    "type": "Space station",
    "dimension": "unknown",
    "residents": [
      "https://rickandmortyapi.com/api/character/8",
      "https://rickandmortyapi.com/api/character/14",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/location/3",
    "created": "2017-11-10T13:08:13.191Z"
  },
  {
    "id": 21,
    "name": "Testicle Monster Dimension",
    "type": "Dimension",
    "dimension": "Testicle Monster Dimension",
    "residents": [
      "https://rickandmortyapi.com/api/character/7",
      "https://rickandmortyapi.com/api/character/436"
    ],
    "url": "https://rickandmortyapi.com/api/location/21",
    "created": "2017-11-18T19:41:01.605Z"
  }
]
`;

const codeString22 = `GET https://rickandmortyapi.com/api/episode`;

const codeString23 = `{
  "info": {
    "count": 51,
    "pages": 3,
    "next": "https://rickandmortyapi.com/api/episode?page=2",
    "prev": null
  },
  "results": [
    {
    "id": 1,
    "name": "Pilot",
    "air_date": "December 2, 2013",
    "episode": "S01E01",
    "characters": [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        //...
    ],
    "url": "https://rickandmortyapi.com/api/episode/1",
    "created": "2017-11-10T12:56:33.798Z"
    },
    // ...
  ]
}
`;

const codeString24 = `GET https://rickandmortyapi.com/api/episode/28`;

const codeString25 = `{
  "id": 28,
  "name": "The Ricklantis Mixup",
  "air_date": "September 10, 2017",
  "episode": "S03E07",
  "characters": [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
    // ...
  ],
  "url": "https://rickandmortyapi.com/api/episode/28",
  "created": "2017-11-10T12:56:36.618Z"
}
`;

const codeString26 = `GET https://rickandmortyapi.com/api/episode/10,28`;

const codeString27 = `[
  {
    "id": 10,
    "name": "Close Rick-counters of the Rick Kind",
    "air_date": "April 7, 2014",
    "episode": "S01E10",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/episode/10",
    "created": "2017-11-10T12:56:34.747Z"
  },
  {
    "id": 28,
    "name": "The Ricklantis Mixup",
    "air_date": "September 10, 2017",
    "episode": "S03E07",
    "characters": [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/episode/28",
    "created": "2017-11-10T12:56:36.618Z"
  }
]
`;

const codeString28 = ``;

const codeString29 = ``;

const codeString30 = ``;

const codeString31 = ``;


export const Docs = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [foundCharacters, setFoundCharacters] = useState<Character[]>([]);
    const [characterSearched, setCharacterSearched] = useState("");
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        // api.get("/character/27").then((response) => setCharacters(response.data))
        handleGetAllCharacters();
    }, []);

    const handleGetAllCharacters = async () => {
        let json = await api.getAllCharacters();
        setCharacters(json.results);
    };

    const handleGetCharacter = async() => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${characterSearched}`);
        const data = await response.json();
        setFoundCharacters(data.results);
    };

    const handleButtonSearch = () => {
        handleGetCharacter();
    }

    const toggleTheme = () => {
        setTheme(theme === "light" ? "light" : "dark");
    }

    return (
        <div className="docs">
            <Header />
            <div className="content">
                <aside className="navbar-left-side">
                    <div className="nb-introduction">
                        <h3>Introduction</h3>
                        <p>GraphQL</p>
                        <p>REST</p>
                        <p>Info e Pagination</p>
                        <p>JavaScript client</p>
                    </div>
                    <div className="nb-character">
                        <h3>Character</h3>
                        <p>Character schema</p>
                        <p>Get all characters</p>
                        <p>Get a single character</p>
                        <p>Get multiple characters</p>
                        <p>Filter characters</p>
                    </div>
                    <div className="nb-location">
                        <h3>Location</h3>
                        <p>Location schema</p>
                        <p>Get all locations</p>
                        <p>Get a single location</p>
                        <p>Get multiple locations</p>
                        <p>Filter locations</p>
                    </div>
                    <div className="nb-episode">
                        <h3>Episode</h3>
                        <p>Episode schema</p>
                        <p>Get all episodes</p>
                        <p>Get a single episode</p>
                        <p>Get multiple episodes</p>
                        <p>Filter episodes</p>
                    </div>
                    <div className="nb-libraries">
                        <h3>Libraries</h3>
                        <p>Dart</p>
                        <p>Elixir</p>
                        <p>Go</p>
                        <p>Java</p>
                        <p>.NET</p>
                        <p>PHP</p>
                        <p>Python</p>
                        <p>R</p>
                        <p>Ruby</p>
                        <p>Rust</p>
                        <p>Swift</p>
                    </div>
                </aside>
                <div className="content-right-side">
                    <h1>Documentation</h1>
                    <div className="c-introduction">
                        <h2>Introduction</h2>
                        <p className="text-content-right-side">This documentation will help you get familiar with the resources of the <strong>Rick and Morty API</strong> and show you how to make different queries, so that you can get the most out of it.</p>
                    </div>
                    <div className="c-graphql">
                        <h3>GraphQL</h3>
                        <a href="https://rickandmortyapi.com/graphql" className="link-content-right-side" target="_blank">https://rickandmortyapi.com/graphql</a>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString1}
                        </SyntaxHighlighter>                    
                    </div>
                    <div className="c-rest">
                        <h3>REST</h3>
                        <p><strong className="text-strong-content-right-side">Base url: </strong><a href="https://rickandmortyapi.com/api" className="link-content-right-side" target="_blank">https://rickandmortyapi.com/api</a></p>
                        <p className="text-content-right-side">The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json.</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString2}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString3}
                        </SyntaxHighlighter> 
                        <p className="text-content-right-side">There are currently three available resources:</p>
                        <ul className="list-docs">
                            <li className="text-content-right-side"><a href="" className="link-content-right-side">Character</a>:  used to get all the characters.</li>
                            <li className="text-content-right-side"><a href="" className="link-content-right-side">Location</a>: used to get all the locations.</li>
                            <li className="text-content-right-side"><a href="" className="link-content-right-side">Episode</a>: used to get all the episodes.</li>
                        </ul>
                    </div>
                    <div className="c-info-pagination">
                        <h3>Info and Pagination</h3>
                        <p className="text-content-right-side">The API will automatically paginate the responses. You will receive up to 20 documents per page.</p>
                        <p className="text-content-right-side">Each resource contains an info object with information about the response.</p>      
                        <table className="table-docs">
                            <tr>
                                <th>Key</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>count</td>
                                <td>int</td>
                                <td>The length of the response</td>
                            </tr>
                            <tr>
                                <td>pages</td>
                                <td>int</td>
                                <td>The amount of pages</td>
                            </tr>
                            <tr>
                                <td>next</td>
                                <td>string (url)</td>
                                <td>Link to the next page (if it exists)</td>
                            </tr>
                            <tr>
                                <td>prev</td>
                                <td>string (url)</td>
                                <td>Link to the previous page (if it exists)</td>
                            </tr>
                        </table>    
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString4}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString5}
                        </SyntaxHighlighter> 
                        <p className="text-content-right-side">You can access different pages with the page parameter. If you don't specify any page, the first page will be shown. For example, in order to access page 2, add ?page=2 to the end of the URL.</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString6}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString7}
                        </SyntaxHighlighter> 
                    </div>
                    <div className="c-javascript-client">
                        <h3>JavaScript client</h3>
                        <p className="text-content-right-side">The Rick and Morty API JavaScript client is a <a href="" className="link-content-right-side">fully typed</a> client that gives you access to the API and its features.</p>
                        <ul className="list-docs">
                            <li className="text-content-right-side"><a href="" className="link-content-right-side">View on GitHub</a></li>
                            <li className="text-content-right-side"><a href="" className="link-content-right-side">Client reference</a></li>
                        </ul>
                    </div>
                    <div className="c-character">
                        <h2>Character</h2>
                        <p className="text-content-right-side">There is a total of 826 characters sorted by id.</p>
                    </div>
                    <div className="c-character-schema">
                        <h3>Character schema</h3>
                        <table className="table-docs">
                            <tr>
                                <th>Key</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>int</td>
                                <td>The id of the character.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>The name of the character.</td>
                            </tr>
                            <tr>
                                <td>status</td>
                                <td>string</td>
                                <td>The status of the character ('Alive', 'Dead' or 'unknown').</td>
                            </tr>
                            <tr>
                                <td>species</td>
                                <td>string</td>
                                <td>The species of the character.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>The type or subspecies of the character.</td>
                            </tr>
                            <tr>
                                <td>gender</td>
                                <td>string</td>
                                <td>The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').</td>
                            </tr>
                            <tr>
                                <td>origin</td>
                                <td>object</td>
                                <td>Name and link to the character's origin location.</td>
                            </tr>
                            <tr>
                                <td>location</td>
                                <td>object</td>
                                <td>Name and link to the character's last known location endpoint.</td>
                            </tr>
                            <tr>
                                <td>image</td>
                                <td>string (url)</td>
                                <td>Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.</td>
                            </tr>
                            <tr>
                                <td>episode</td>
                                <td>array (urls)</td>
                                <td>List of episodes in which this character appeared.</td>
                            </tr>
                            <tr>
                                <td>url</td>
                                <td>string (url)</td>
                                <td>Link to the character's own URL endpoint.</td>
                            </tr>
                            <tr>
                                <td>created</td>
                                <td>string</td>
                                <td>Time at which the character was created in the database.</td>
                            </tr>
                        </table>    
                    </div>
                    <div className="c-get-all-characters">
                        <h3>Get all characters</h3>
                        <p className="text-content-right-side">You can access the list of characters by using the /character endpoint.</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString8}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString9}
                        </SyntaxHighlighter> 
                    </div>
                    <div className="c-get-single-character">
                        <h3>Get a single character</h3>
                        <p className="text-content-right-side">You can get a single character by adding the id as a parameter: /character/2</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString10}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString11}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-get-multiples-characters">
                        <h3>Get multiple characters</h3>
                        <p className="text-content-right-side">You can get multiple characters by adding an array of ids as parameter: /character/[1,2,3] or /character/1,2,3</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString12}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString13}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-filter-characters">
                        <h3>Filter characters</h3>
                        <p className="text-content-right-side">You can also include filters in the URL by including additional query parameters. To start filtering add a ? followed by the query {'<query>=<value>'}. If you want to chain several queries in the same call, use & followed by the query.</p>
                        <p className="text-content-right-side">For example, If you want to check how many alive Ricks exist, just add ?name=rick&status=alive to the URL.</p>
                        <p className="text-content-right-side">Available parameters:</p>
                        <ul className="list-docs">
                            <li className="text-content-right-side">name: filter by the given name.</li>
                            <li className="text-content-right-side">status: filter by the given status (alive, dead or unknown).</li>
                            <li className="text-content-right-side">species: filter by the given species.</li>
                            <li className="text-content-right-side">type: filter by the given type.</li>
                            <li className="text-content-right-side">gender: filter by the given gender (female, male, genderless or unknown).</li>
                        </ul>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString14}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString15}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-location">
                        <h2>Location</h2>
                        <p className="text-content-right-side">There is a total of 126 locations sorted by id.</p>
                    </div>
                    <div className="c-location-schema">
                        <h3>Location schema</h3>
                        <table className="table-docs">
                            <tr>
                                <th>Key</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>int</td>
                                <td>The id of the location.</td>
                            </tr>
                            <tr>
                                <td>type</td>
                                <td>string</td>
                                <td>The type of the location.</td>
                            </tr>
                            <tr>
                                <td>dimension</td>
                                <td>string</td>
                                <td>The dimension in which the location is located.</td>
                            </tr>
                            <tr>
                                <td>residents</td>
                                <td>array (urls)</td>
                                <td>List of character who have been last seen in the location.</td>
                            </tr>
                            <tr>
                                <td>url</td>
                                <td>string (url)</td>
                                <td>Link to the location's own endpoint.</td>
                            </tr>
                            <tr>
                                <td>created</td>
                                <td>string</td>
                                <td>Time at which the location was created in the database.</td>
                            </tr>
                        </table>
                    </div>
                    <div className="c-get-all-locations">
                        <h3>Get all locations</h3>
                        <p className="text-content-right-side">You can access the list of locations by using the /location endpoint.</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString16}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString17}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-get-single-location">
                        <h3>Get a single location</h3>
                        <p className="text-content-right-side">You can get a single location by adding the id as a parameter: /location/3</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString18}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString19}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-get-multiple-locations">
                        <h3>Get multiple locations</h3>
                        <p className="text-content-right-side">You can get multiple locations by adding an array of ids as parameter: /location/[1,2,3] or /location/1,2,3</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString20}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString21}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-filter-locations">
                        <h3>Filter locations</h3>
                        <p className="text-content-right-side">Available parameters:</p>
                        <ul className="list-docs">
                            <li className="text-content-right-side">name: filter by the given name.</li>
                            <li className="text-content-right-side">type: filter by the given type.</li>
                            <li className="text-content-right-side">dimension: filter by the given dimension.</li>
                        </ul>
                        <li className="text-content-right-side">If you want to know how to use queries, check <a href="" className="link-content-right-side">here</a></li>
                    </div>
                    <div className="c-episode">
                        <h2>Episode</h2>
                        <p className="text-content-right-side">There is a total of 51 episodes sorted by id (which is of course the order of the episodes)</p>
                    </div>
                    <div className="c-episode-schema">
                        <h3>Episode schema</h3>
                        <table className="table-docs">
                            <tr>
                                <th>Key</th>
                                <th>Type</th>
                                <th>Description</th>
                            </tr>
                            <tr>
                                <td>id</td>
                                <td>int</td>
                                <td>The id of the episode.</td>
                            </tr>
                            <tr>
                                <td>name</td>
                                <td>string</td>
                                <td>The name of the episode.</td>
                            </tr>
                            <tr>
                                <td>air_date</td>
                                <td>string</td>
                                <td>The air date of the episode.</td>
                            </tr>
                            <tr>
                                <td>episode</td>
                                <td>string</td>
                                <td>The code of the episode.</td>
                            </tr>
                            <tr>
                                <td>characters</td>
                                <td>array (urls)</td>
                                <td>List of characters who have been seen in the episode.</td>
                            </tr>
                            <tr>
                                <td>url</td>
                                <td>string (url)</td>
                                <td>Link to the episode's own endpoint.</td>
                            </tr>
                            <tr>
                                <td>created</td>
                                <td>string</td>
                                <td>Time at which the episode was created in the database.</td>
                            </tr>
                        </table>
                    </div>
                    <div className="c-get-all-episodes">
                        <h3>Get all episodes</h3>
                        <p className="text-content-right-side">You can access the list of episodes by using the /episode endpoint.</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString22}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString23}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-get-single-episode">
                        <h3>Get a single episode</h3>
                        <p className="text-content-right-side">You can get a single episode by adding the id as a parameter: /episode/28</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString24}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString25}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-get-multiple-episodes">
                        <h3>Get multiple episodes</h3>
                        <p className="text-content-right-side">You can get multiple episodes by adding an array of ids as parameter: /episode/[1,2,3] or /episode/1,2,3</p>
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "23px",
                                borderTopLeftRadius: "7px",
                                borderTopRightRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString26}
                        </SyntaxHighlighter> 
                        <SyntaxHighlighter 
                            language="jsx" 
                            style={atomOneDark}
                            customStyle={{
                                padding: "30px",
                                fontSize: "18px", 
                                backgroundColor: "#202329",
                                marginTop: "2px",
                                borderBottomRightRadius: "7px",
                                borderBottomLeftRadius: "7px",
                                fontFamily: "Fira Code, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace",
                            }}
                        >
                            {codeString27}
                        </SyntaxHighlighter>
                    </div>
                    <div className="c-filter-episodes">
                        <h3>Filter episodes</h3>
                        <p className="text-content-right-side">Available parameters:</p>
                        <ul className="list-docs">
                            <li className="text-content-right-side">name: filter by the given name.</li>
                            <li className="text-content-right-side">episode: filter by the given episode code.</li>
                        </ul>
                        <p className="text-content-right-side">If you want to know how to use queries, check <a href="" className="link-content-right-side">here</a>.</p>
                    </div>
                    <div className="c-libraries">
                        <h2>Libraries</h2>
                        <p className="text-content-right-side">Here you will find a list of community helper libraries to use the Rick and Morty API with your preferred language. You can also quickly start using the API with this <a href="" className="link-content-right-side">Postman collection</a> created by <a href="" className="link-content-right-side">loopDelicious</a>. Alternatively, you can also use this <a href="" className="link-content-right-side">Insomnia collection</a> created by <a href="" className="link-content-right-side">filfreire</a>.</p>
                        <p className="text-content-right-side">If you are looking for a <strong>JavaScript library</strong>, you can check <a href="" className="link-content-right-side">The Rick and Morty API JavaScript client</a></p>
                    </div>
                    <div className="c-libraries-dart">
                        <h3>Dart</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">Rick and Morty API Dart Client</a> by <a href="" className="link-content-right-side">Yash Garg</a></p>
                    </div>
                    <div className="c-libraries-elixir">
                        <h3>Elixir</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">ExShla - The Rick and Morty API Wrapper</a> by <a href="" className="link-content-right-side">l1h3r</a></p>
                    </div>
                    <div className="c-libraries-go">
                        <h3>Go</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">The Rick and Morty API Go client</a> by <a href="" className="link-content-right-side">Leopoldo Caballero</a></p>
                    </div>
                    <div className="c-libraries-java">
                        <h3>Java</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">Rick and Morty API Java Client</a> by <a href="" className="link-content-right-side">Adriano Rocha</a></p>
                    </div>
                    <div className="c-libraries-net">
                        <h3>.NET</h3>
                        <ul className="list-docs">
                            <li className="text-content-right-side"><a href="" className="link-content-right-side">Rick.Net</a> by <a href="" className="link-content-right-side">BIGDummyHead</a></li>
                            <li className="text-content-right-side"><a href="" className="link-content-right-side">RickAndMorty.Net.Api</a> by <a href="" className="link-content-right-side">Carlj28</a></li>
                        </ul>
                    </div>
                    <div className="c-libraries-php">
                        <h3>PHP</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">Rick and Morty API PHP Client</a> by <a href="" className="link-content-right-side">Nick Been</a></p>
                    </div>
                    <div className="c-libraries-python">
                        <h3>Python</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">Python implementation for the Rick and Morty API</a> by <a href="" className="link-content-right-side">Rohan Hazra</a></p>
                    </div>
                    <div className="c-libraries-r">
                        <h3>R</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">mortyr</a> by <a href="" className="link-content-right-side">Mike Page</a></p>
                    </div>
                    <div className="c-libraries-ruby">
                        <h3>Ruby</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">The Rick and Morty API Gem</a> by <a href="" className="link-content-right-side">Tommy Spielhoelle</a></p>
                    </div>
                    <div className="c-libraries-rust">
                        <h3>Rust</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">rick-and-morty crate</a> by <a href="" className="link-content-right-side">dshomoye</a></p>
                    </div>
                    <div className="c-libraries-swift">
                        <h3>Swift</h3>
                        <p className="text-content-right-side"><a href="" className="link-content-right-side">The Rick and Morty API Swift Client</a> by <a href="" className="link-content-right-side">Benjamin Bruch</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}