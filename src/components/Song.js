import React from 'react'

function Song(props) {
    return (
        <div className="song">
            <h3>{props.title} {props.artist} {props.genre} {props.rating} </h3>
        </div>
    )
}

export default Song