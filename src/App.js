import React, { Component } from "react";
import YTSearch from "youtube-api-search";
import _ from 'lodash'
import "./App.css";
//From current directory (./) go into components folder, find file search_bar
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import Header from "./components/header";
import 'materialize-css/dist/css/materialize.css'

const API_KEY = "AIzaSyDyaBH5-6yUGGEdZgP44fQYDyjUEabUTBk";
//https://github.com/gitname/react-gh-pages  deploy
// Create a new component. This component should produce some HTML.
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      term: ""
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="container">
        <Header />
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
