import React from 'react'

function SongForm(props) {
    // console.log(props)
    return (
        <div>
            <form className="form" onClick={props.handleSubmit} value={props.formFields}>
                <input
                    type="text"
                    name="title"
                    value={props.songs.title}
                    placeholder="Titel"
                    onChange={props.handleChange}
                    required></input>
                <input
                    type="text"
                    name="artist"
                    value={props.songs.artist}
                    placeholder="Artiest"
                    onChange={props.handleChange}
                    required></input>

                <select
                    value={props.songs.genre}
                    name="genre"
                    onChange={props.handleChange}
                    required
                >
                    <option value="">-- Choose a genre --</option>
                    <option value="apres ski">Apres Ski</option>
                    <option value="techno">Techno</option>
                    <option value="lovesongs">Lovesongs</option>
                    <option value="hardrock">Hardrock</option>
                </select>
                <select
                    value={props.songs.rating}
                    name="rating"
                    onChange={props.handleChange}
                    required
                >
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