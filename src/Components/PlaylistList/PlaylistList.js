import React from 'react';

import './PlaylistList.css';

class PlaylistList extends React.Component  {
    render()  {
        return(
             <div className="Playlist-import">
                {/* <input defaultValue= {"Existing playlist"} onChange={this.handleNameChange} /> */}
                <h2 class='existing playlist'>Existing playlists</h2>


                
                <button className="Playlist-import-save" onClick = {this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}







export default PlaylistList;