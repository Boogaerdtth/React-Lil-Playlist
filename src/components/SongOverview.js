import React, { Component } from 'react'
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends Component {
    constructor() {
        super()
        this.state =
        {
            songs: [
                { id: 1, title: "Hello", artist: 'Lionel Richie', genre: 'Love songs', rating: 5 },
                { id: 2, title: "Master of Puppets", artist: "Metallica", genre: "Hardrock", rating: 5 }
            ],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.emptyList = this.emptyList.bind(this)
    }
    emptyList = (event) => {
        event.preventDefault()
        this.setState({ songs: [] })
    }

    addSong = (song) => {
        // doe iets om de state aan te passen
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        const song = {
            id: this.state.songs.length + 1,
            title: this.state.songs.title,
            artist: this.state.songs.artist,
            genre: this.state.songs.genre,
            rating: this.state.songs.rating
        }
        event.preventDefault()
        // this.setState(prevState => {
        //     const newList = prevState.songs.concat(song)
        this.setState({ songs: [...this.state.songs].concat([song]) })
        console.log('hallo')
        // return { songs: newList }

        // this.setState({ songs.title: " " }, { songs.artist: "" }, { songs.genre: "" }, { songs.rating: "" })
        // })

        // de submitbutton doet nog niks.
        // aan de hand van sebas zn opdracht verder gaan maandag
        // moet ik de waardes van de inputfields definieren in de Form component?
        // of kan ik ze in de overview laten staan?
        // zet m op!!!!
    }
    render() {
        return (
            <div>
                <SongForm
                    addSong={this.addSong}
                    handleChange={this.handleChange}
                    setState={this.setState}
                    emptyList={this.emptyList}
                    songs={this.state.songs}
                    handleSubmit={this.handleSubmit}
                />
                <SongList
                    songs={this.state.songs}
                    emptyList={this.emptyList}
                    setState={this.setState}
                />
            </div >
        );
    }
}

export default SongOverview;