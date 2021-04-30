import React from "react";

import './card.css'

export const Card = props => {
    return (
        <div className={'card-container'}>
            {/*<img crossOrigin={'anonymous'} src={props.character.url} alt="character" />*/}
            <h3> {props.character.name} </h3>
        </div>
    );
}