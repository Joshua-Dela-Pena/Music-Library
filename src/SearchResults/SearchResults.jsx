import React from 'react';

const SearchResults = (props) => {

    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Album</td>
                        <td>Genre</td>
                        <td>Artist</td>
                        <td>ID</td>
                        <td>Release Date</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                        <tr key={props.songFound.id}>
                            <td>{props.songFound.album}</td>
                            <td>{props.songFound.genre}</td>
                            <td>{props.songFound.artist}</td>
                            <td>{props.songFound.id}</td>
                            <td>{props.songFound.releaseDate}</td>
                            <td>{props.songFound.title}</td>
                        </tr>
                    </tbody>
            </table>
        </div>
     );
}
 
export default SearchResults;