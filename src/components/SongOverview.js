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
            inputField: " "

        }

    }
    emptyList = (event) => {
        event.preventDefault()
        this.setState({ songs: [] })
    }
    // nog geen setState toegepast en doorgegeven

    addSong = (song) => {
        // doe iets om de state aan te passen
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        const song = { id: this.state.songs.length + 1, title: this.state.inputField }
        event.preventDefault()
        this.setState({ songs: [...this.state.songs].concat([song]) })
        this.setState({ inputField: " " })
    }


    render() {
        return (
            <div>
                <SongForm
                    addSong={this.addSong}
                    handleChange={this.handleChange}
                    setState={this.setState}
                    emptyList={this.emptyList}


                />
                <SongList
                    songs={this.state.songs}
                    emptyList={this.emptyList}
                    setState={this.setState}

                />

            </div>
        );
    }
}

export default SongOverview;