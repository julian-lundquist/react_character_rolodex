import React from "react";

import {Card} from '../card/card.component';

import './card-list.css'

export const CardList = props => {
    return (
        <div className={'card-list'}>
            {props.characters.map(character => {
                return <Card key={character.id} character={character}></Card>
            })}
        </div>
    );
}