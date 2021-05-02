import React from "react";
import './App.css';

import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from './components/card-list/card-list.component';

import {GiphyFetch} from "@giphy/js-fetch-api";

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

const gf = new GiphyFetch('OhyKGDrCTct0EKGl1NmagjvwwelQR6WG')

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [],
            searchField: '',
        }
    }

    addGifs = async () => {
        for (const character of characters) {
            await gf.search(character.name,{ sort: 'relevant', limit: 1 }).then(gifs => {
                character.url = gifs.data[0].embed_url;
            });
        }

        console.log('State Change')
        this.state.characters = []
        await this.setState({
            characters: characters
        })
        console.log(this.state.characters)
    }

    componentDidMount() {
        this.addGifs();
    }

    handleSearchBoxChange = (e) => {
        this.setState({ searchField: e.target.value });
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
                <h1>Characters Rolodex</h1>
                <SearchBox placeholder={'search characters'} handleChange={ this.handleSearchBoxChange } />
                <CardList characters={filteredCharacters} />
            </div>
        );
    }
}

export default App;
