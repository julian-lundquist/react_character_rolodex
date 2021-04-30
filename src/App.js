import React from "react";
import './App.css';

import { CardList } from './components/card-list/card-list.component'

import { GiphyFetch } from '@giphy/js-fetch-api';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characters: [
                {
                    id: 'char1',
                    name: 'Superman'
                },
                {
                    id: 'char2',
                    name: 'Batman'
                },
                {
                    id: 'char3',
                    name: 'Spiderman'
                },
                {
                    id: 'char4',
                    name: 'Wonder Woman'
                },
                {
                    id: 'char5',
                    name: 'Joker'
                },
                {
                    id: 'char6',
                    name: 'Wolverine'
                }
            ]
        }
    }

    componentDidMount() {
        const gf = new GiphyFetch('OhyKGDrCTct0EKGl1NmagjvwwelQR6WG')
        this.state.characters.map(character => {
            return gf.search(character.name,{ sort: 'relevant', limit: 1 }).then((gifs) => {
                this.setState({
                    characters: [
                        {
                            id: character.id,
                            name: character.name,
                            url: gifs.data[0].url
                        }
                    ]
                })
                console.log(gifs.data[0].url)
            });
        });
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
