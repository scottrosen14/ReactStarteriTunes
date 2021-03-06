import React, { Component } from 'react';
import Search from './Search';
import AlbumsList from './AlbumsList';
import axios from 'axios';

// 1. Create a github Repo or Click 'Fork' from the top menu and generate your own JSFiddle link.
// Be sure to click 'Update' when your work is done.

// 2. Create a Search Component for entering an Artist

// 3. On Search, make an api call to iTunes API to fetch the information about the artist
// API URL: https://itunes.apple.com/search?term=${ARTIST_NAME}

// 4. When the Search button is clicked, make a call to the API and display the list of albums, including the album name and album cover inside #albums-container in a grid. Use any CSS technique you are comfortable with (Note: The API will return a list of albums based on the search result. Use your skills to find out what the iTunes API data structure looks like and extract the relevant data from it).
  // name, cover -- grid

// 5. Style the page to the best of the ability to make the UI look clean and presentable

// 6. Checkin or Click Update from the top Menu and save the link


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  fetchAlbums = () => {
    axios.get('https://itunes.apple.com/search?term=${ARTIST_NAME}')
      .then(function (res) {
        // console.log('data', res.data);
        this.setState({data: res.data.results});
        // console.log('state', this.state);
      }.bind(this))
      .catch(function (err) {
        console.log(err);
    });
  }

  render() {
    return (
      <div id="container">
        <Search name='Search Albums' fetchAlbums={this.fetchAlbums} />
        <AlbumsList data={this.state.data}/>
      </div>
    )
  }
}

export default App;
