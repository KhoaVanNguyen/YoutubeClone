import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import { Button } from "reactstrap";
import { Container, Header, Grid, Segment } from "semantic-ui-react";
import VideoPlayer from './components/VideoPlayer'
import "semantic-ui-css/semantic.min.css";

// eslint-disable-next-line
const API_KEY = "AIzaSyC5Ooo9JGqR-Tb30S4p9InOk3JoTv9gMdg";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    YTSearch({ key: API_KEY, term: "niviki.com" }, videos =>{
        this.setState({ videos })
        console.log(videos)
        // 9--bCmrp83U
        this.setState({ selectedVideo: videos[0]  })
    }
      
    );
  }
  onSelectVideo = (video) =>{
    console.log('change here')
    console.log(video)
    this.setState({ selectedVideo: video })
  }
  render() {

    if ( this.state.videos.length === 0 || this.state.selectedVideo === null ){
      return <div> Loading.... </div>
    }
    // this.setState({ selectedVideoId: this.state.videos[0] })
    
    
    return (
      <div className="App">
        <Grid columns="two">
          <Grid.Column width={12} stretched>
            <Segment>
              <SearchBar />
               <VideoPlayer video = { this.state.selectedVideo } /> 
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <VideoList videos={ this.state.videos  }
                      onSelectVideo = { this.onSelectVideo }
               />
            </Segment>
          </Grid.Column>
        </Grid>
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
