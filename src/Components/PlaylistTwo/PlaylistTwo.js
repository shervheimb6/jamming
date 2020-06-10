userId;

import React from 'react';

import './PlaylistTwo.css';


class PlaylistTwo extends React.component {

        constructor(props)  {
            super(props)


            Spotify.getUserPlaylists(event)  {


                if (userId)  {
                    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`);
                } else {
                    console.log("error");
                }
        
            }
        

        }



    render()  {
        return(
            
            playlistListItem();



            <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.searchResults}
            onAdd={this.props.onAdd}
            isRemoval={false} />
        </div>

        )
    }

}

export default PlaylistTwo;