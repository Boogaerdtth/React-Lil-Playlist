import React from 'react'

function SongForm(props) {
    return (
        <div>
            <form className="form" onSubmit={props.addNewSong}>
                <input
                    type="text"
                    name='title'
                    value={props.title}
                    placeholder="Titel"
                    onChange={props.handleChange}
                    required></input>
                <input
                    type="text"
                    name='artist'
                    value={props.artist}
                    placeholder="Artiest"
                    onChange={props.handleChange}
                    required></input>
                <select
                    value={props.genre}
                    name='genre'
                    onChange={props.handleChange}
                    required>
                    <option value="">-- Choose a genre --</option>
                    <option value="Apres Ski">Apres Ski</option>
                    <option value="Techno">Techno</option>
                    <option value="Lovesongs">Lovesongs</option>
                    <option value="Hardrock">Hardrock</option>
                </select>
                <select
                    value={props.rating}
                    name='rating'
                    onChange={props.handleChange}
                    required>
                    <option value="">-- Give a rating --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button>Voeg toe</button>
            </form>
            <button onClick={props.emptyList}>Maak lijst leeg</button>
        </div >
    )
}

export default SongForm