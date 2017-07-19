import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from './components/VideoList'
// eslint-disable-next-line
const API_KEY = "AIzaSyC5Ooo9JGqR-Tb30S4p9InOk3JoTv9gMdg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "niviki.com" }, videos =>
      this.setState({ videos })
    );
  }
  render() {
    return (
      <div className="App">
        <p> Hello World </p>
        <div>
           <SearchBar /> 
           <VideoList videos = { this.state.videos }/>
        </div>
      </div>
    );
  }
}

export default App;

//  <div className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <h2>Welcome to React</h2>
//   </div>
//   <p className="App-intro">
//     To get started, edit <code>src/App.js</code> and save to reload.
//   </p>
