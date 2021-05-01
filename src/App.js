import React from "react";
import './App.css';

import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from './components/card-list/card-list.component';

import {GiphyFetch} from "@giphy/js-fetch-api";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        const gf = new GiphyFetch('OhyKGDrCTct0EKGl1NmagjvwwelQR6WG')
        let characters = [
            {
                id: 'char1',
                name: 'Superman',
                url: ''
            },
            {
                id: 'char2',
                name: 'Batman',
                url: ''
            },
            {
                id: 'char3',
                name: 'Spiderman',
                url: ''
            },
            {
                id: 'char4',
                name: 'Wonder Woman',
                url: ''
            },
            {
                id: 'char5',
                name: 'Joker',
                url: ''
            },
            {
                id: 'char6',
                name: 'Thor',
                url: ''
            },
            {
                id: 'char7',
                name: 'Iron Man',
                url: ''
            },
            {
                id: 'char8',
                name: 'Deadpool',
                url: ''
            },
            {
                id: 'char9',
                name: 'Hulk',
                url: ''
            },
            {
                id: 'char10',
                name: 'Wolverine',
                url: ''
            },
            {
                id: 'char11',
                name: 'Captain America',
                url: ''
            },
            {
                id: 'char12',
                name: 'Thanos',
                url: ''
            }
        ]

        let addGif = async () => {
            for (const character of characters) {
                await gf.search(character.name,{ sort: 'relevant', limit: 1 }).then(gifs => {
                    character.url = gifs.data[0].embed_url;
                });
            }

            console.log('State Change')
            await this.setState({
                characters: characters
            })
            console.log(this.state.characters)
        }

        addGif();
    }

    render() {
        const { characters, searchField } = this.state;
        const filteredCharacters = characters.filter(character => {
            return character.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return (
            <div className="App">
                {/*<header className="App-header">*/}
                {/*</header>*/}
                <SearchBox placeholder={'search characters'} handleChange={e => this.setState({searchField: e.target.value})}/>
                <CardList characters={filteredCharacters} />
            </div>
        );
    }
}

export default App;
