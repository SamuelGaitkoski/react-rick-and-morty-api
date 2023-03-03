import '../styles/docs.scss';

import { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { Character } from '../types/Character';

import { api } from '../services/api';

import { codeString1, codeString2, codeString3, codeString4, codeString5, codeString6, codeString7, codeString8, codeString9, codeString10, codeString11, codeString12, codeString13, codeString14, codeString15, codeString16, codeString17, codeString18, codeString19, codeString20, codeString21, codeString22, codeString23, codeString24, codeString25, codeString26, codeString27 } from '../utils/CodeStrings';

type Props = {
    theme: "light" | "dark";
}

export const Docs = ({ theme }: Props) => {
    console.log(theme);

    return (
        <div 
            className="docs" 
            style={{backgroundColor: theme === "light" ? "#FFF" : "#000000CC"}}
        >
            <div className="content">
                <aside className="navbar-left-side">
                    <div 
                    className="nb-introduction">
                        <h3 style={{color: theme === "light" ? "#333" : "#FFF"}}>Introduction</h3>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>GraphQL</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>REST</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Info e Pagination</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>JavaScript client</p>
                    </div>
                    <div className="nb-character">
                        <h3 style={{color: theme === "light" ? "#333" : "#FFF"}}>Character</h3>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Character schema</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get all characters</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get a single character</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get multiple characters</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Filter characters</p>
                    </div>
                    <div className="nb-location">
                        <h3 style={{color: theme === "light" ? "#333" : "#FFF"}}>Location</h3>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Location schema</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get all locations</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get a single location</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get multiple locations</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Filter locations</p>
                    </div>
                    <div className="nb-episode">
                        <h3 style={{color: theme === "light" ? "#333" : "#FFF"}}>Episode</h3>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Episode schema</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get all episodes</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get a single episode</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Get multiple episodes</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Filter episodes</p>
                    </div>
                    <div className="nb-libraries">
                        <h3 style={{color: theme === "light" ? "#333" : "#FFF"}}>Libraries</h3>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Dart</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Elixir</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Go</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Java</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>.NET</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>PHP</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Python</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>R</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Ruby</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Rust</p>
                        <p style={{color: theme === "light" ? "#333" : "#FFF"}}>Swift</p>
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
        </div>
    );
}