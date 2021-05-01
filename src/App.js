import React from "react";
import './App.css';

import { CardList } from './components/card-list/card-list.component'
import {GiphyFetch} from "@giphy/js-fetch-api";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: []
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
                name: 'Wolverine',
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
        };

        addGif();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <CardList characters={this.state.characters} />
                </header>
            </div>
        );
    }
}

export default App;
