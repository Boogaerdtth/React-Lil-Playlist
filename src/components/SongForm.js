import React from 'react'

function SongForm(props) {
    console.log(props.setState)
    return (
        <div>
            <form className="form" onClick={props.handleSubmit}>
                <input
                    type="text"
                    name="inputField"
                    value={props.inputField}
                    placeholder="Titel"
                    onChange={props.handleChange}></input>
                <input
                    type="text"
                    name="inputField"
                    value={props.inputField}
                    placeholder="Artiest"
                    onChange={props.handleChange}></input>
                <input
                    type=""></input>
                <input
                    type=""></input>
                <button>Voeg toe</button>
                <button onClick={props.emptyList}>Maak lijst leeg</button>

            </form>
        </div >
    )
}

export default SongForm