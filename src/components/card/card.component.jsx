import React from "react";

import './card.css'

export const Card = props => {
    return (
        <div className={'card-container'}>
            <iframe src={props.character.url} width="480" height="360" frameBorder="0"
                    className="giphy-embed" allowFullScreen></iframe>
            {/*<img crossOrigin={'anonymous'} src={props.character.url} alt="character" />*/}
            <h3> {props.character.name} </h3>
        </div>
    );
}