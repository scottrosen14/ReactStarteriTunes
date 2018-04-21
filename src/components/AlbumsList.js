import React from 'react';

class AlbumsList extends React.Component {
  render () {
    const { data } = this.props;
    // iterate through the data array and create a table row for each album name and cover
    let albums = data.map((song, i) => {
      return (
        <tr key={i} index={i}>
          <td> <img className="albumCover" src={song.artworkUrl60}/> </td>
          <td> {song.collectionName} </td>
        </tr>
      );
    });
    return (
      <table>
        <tr>
          <th>Cover</th>
          <th>Album</th>
        </tr>
          {albums}
      </table>
    );
  }
}

export default AlbumsList;
