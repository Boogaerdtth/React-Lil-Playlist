import React from 'react'

function SongList(props) {
    return (
        <div className="list">
            <table className="song-header">
                <th className="song-row__item">Song</th>
                <th className="song-row__item">Artist</th>
                <th className="song-row__item">Genre</th>
                <th className="song-row__item">Rating</th>
                {props.songs.map((song, id) => (
                    <tr key={id} className="tableSongs">
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.genre}</td>
                        <td>{song.rating}</td>
                        {/* <td><button className="btnDelete" onClick={() => this.handleDelete(song._id)}></button></td> */}
                    </tr>
                ))
                }
            </table>
        </div >
    )
}
export default SongList