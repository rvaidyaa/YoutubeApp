import React, { Component } from 'react';
import YTSearch from "youtube-api-search";
//make a compoenent that searches YTsearch and saves it to the state, then display the first video
const API_KEY = "AIzaSyDyaBH5-6yUGGEdZgP44fQYDyjUEabUTBk";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: "surfboard" }, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0] 
    });
      
    });
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

