import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  // just putting in a default search term
  componentDidMount() {this.onSearchTermSubmit('puppies'); }

  onSearchTermSubmit = async (searchTerm) => {
    console.log('From App.js onSearchTermSubmit: ', searchTerm);
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm // this is a youtube param (the q part)
      }
    });

    console.log("response", response.data);
    this.setState({ 
      videos: response.data.items, 
      selectedVideo: response.data.items[0] // this puts first video in player.
    });
  };

  // callback being sent DOWN first to videoList THEN to videoItem
  onVideoSelect = (video) => { 
    this.setState({ selectedVideo: video})
  }

  render() {
    return (
      <div className="ui container">
        {/* onFormSubmit can be named anything. We are passing down
        onSearchTermSubmit callback to SearchBar via onFormSubmit prop */}
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* remember we are passing these DOWN */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
              I have {this.state.videos.length} videos.
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;