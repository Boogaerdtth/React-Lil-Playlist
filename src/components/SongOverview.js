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
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.emptyList = this.emptyList.bind(this)
    }
    emptyList = (event) => {
        event.preventDefault()
        this.setState({ songs: [] })
    }

    // addSong = (song) => {
    //     // doe iets om de state aan te passen
    // }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }



    // de submitbutton doet nog niks.
    // aan de hand van sebas zn opdracht verder gaan maandag
    // moet ik de waardes van de inputfields definieren in de Form component?
    // of kan ik ze in de overview laten staan?
    // zet m op!!!!

    render() {

        const addNewSong = event => {
            event.preventDefault()
            const song = {
                id: this.state.songs.length + 1,
                title: this.state.title,
                artist: this.state.artist,
                genre: this.state.genre,
                rating: this.state.rating
            }
            this.setState(prevState => {
                const newList = prevState.songs.concat(song)
                return { songs: newList }
            })
            // this.setState({ this.state.title: " " }, { songs.artist: "" }, { songs.genre: "" }, { songs.rating: "" })
            // })            
            // this.setState({ songs: [...this.state.songs].concat([song]) })
            // return { songs: newList }
        }

        // const handleClickGroceryItem = event => {
        //     const clickedItem = event.target.innerText
        //     const currentShoppingList = this.state.shoppingListItems
        //     const shoppingListItem = currentShoppingList.filter(
        //         item => item.title === clickedItem)






        return (
            <div>
                <SongForm
                    addNewSong={addNewSong}
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
                    addNewSong={addNewSong}
                />
            </div >
        );
    }
}

export default SongOverview;