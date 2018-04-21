import React from 'react';

class AlbumsList extends React.Component {
  render () {
    const { data } = this.props;
    let albums = data.map((song, i) => {
      return (
        <tr key={i} index={i}>
          <td> <img className="albumCover" src={song.artworkUrl100}/> </td>
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
