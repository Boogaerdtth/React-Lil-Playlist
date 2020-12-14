import React from 'react'

import SongOverview from './components/SongOverview'

function Homepage() {
    return (
        <div className="App">
            <h1 className="title">Lil' Playlist</h1>
            <SongOverview />
        </div>
    )
}

export default Homepage