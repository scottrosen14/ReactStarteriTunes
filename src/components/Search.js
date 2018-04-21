import React from 'react';

class Search extends React.Component {
  render () {
    const { name, fetchAlbums } = this.props;
    return (
      <button className="searchBtn" onClick={fetchAlbums}>
      {name}
      </button>
    )
  }
}

export default Search;
