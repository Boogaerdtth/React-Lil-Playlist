import React from 'react'
import Song from './Song'

function SongList(props) {
    return (
        <div className="list">
            <table className="song-header">
                <thead>
                    <tr>
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            {props.songs.map(song =>
                                <Song
                                    key={song.id}
                                    title={song.title}
                                    artist={song.artist}
                                    genre={song.genre}
                                    rating={song.rating}
                                />)}
                        </th>
                    </tr>
                </tbody>
            </table>
            <div>
            </div>
        </div >
    )
}

export default SongList