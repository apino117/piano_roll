import React, { Component } from "react";

// Router Stuff
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Form from "./components/Form/index";
import API from "./utils/API";

const exampleObject = {
  tags: [
    100,
    105,
    118,
    110,
    97,
    118,
    100,
    105,
    118,
    100,
    105,
    118,
    100,
    105,
    118,
    100,
    105,
    118,
    110,
    111,
    115,
    99,
    114,
    105,
    112,
    116,
    110,
    111,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    115,
    99,
    114,
    105,
    112,
    116,
    100,
    105,
    118
  ],
  _id: "5d2769a8653e748a1ce90c29",
  title: "Reductress » Women's News. Feminized.",
  __v: 0
}

const Tone = require("tone");

class App extends Component {

  state = {
    audioContext: {},
    websites: [],
    q: ""
  }

  getNoteObject = () => {

    let noteObj = {};
    let count = 0;
    let column = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    let columnCount = 0;

    for (let i = -2; i < 9; i++) {
      for (columnCount = 0; columnCount < 12; columnCount++) {
        noteObj[count] = column[columnCount] + i;
        count++;
      }
      columnCount = 0;
    }

    return noteObj;
  }


  componentDidMount = () => {

    const context = new AudioContext();

    this.setState({ audioContext: context });

  }

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  handleFormSubmit = event => {
    event.preventDefault();

    const urlToScrape = {
      url: this.state.q
    };

    // API.saveWebsite(urlToScrape);

    API.storeUrl(urlToScrape)
    .then(() => API.retrieveUrl(urlToScrape));

    // console.log(urlToScrape);

    this.setState({
      q: " "
    });
    // this.getBooks();
  };

  playSynth = () => {


    const synth = new Tone.FMSynth().toMaster();


    // exampleObject.tags.forEach((tag) => {
    //   synth.triggerAttackRelease(this.getNoteObject()[tag], '2n', Tone.Time('2n') + Tone.Time('4n'))
    // });



    // schedule a series of notes to play as soon as the page loads
    synth.triggerAttackRelease(this.getNoteObject()[exampleObject.tags[0]], '4n', '8n')
    synth.triggerAttackRelease(this.getNoteObject()[exampleObject.tags[2]], '8n', Tone.Time('4n') + Tone.Time('8n'))
    synth.triggerAttackRelease(this.getNoteObject()[exampleObject.tags[3]], '16n', '2n')
    synth.triggerAttackRelease(this.getNoteObject()[exampleObject.tags[5]], '16n', Tone.Time('2n') + Tone.Time('8t'))
    synth.triggerAttackRelease(this.getNoteObject()[exampleObject.tags[7]], '16', Tone.Time('2n') + Tone.Time('8t') * 2)
    synth.triggerAttackRelease(this.getNoteObject()[exampleObject.tags[76]], '2n', '0:3')

    this.state.audioContext.resume().then(() => {
      console.log('Playback resumed successfully');
    });


  }

  // returnValue()


  render() {
    return (
      <>
        <div className="container" id="main-content-container">
          <div className="row" id="main-content-row">

            <h1>Piano Roll</h1>

            <div className="col-12" id="main-content-column">

              <button type="submit" onClick={this.playSynth} className="btn btn-primary mb-2">Play Synth</button>

              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />

              <div class="container">

                <div class="jumbotron text-center">
                  <h1><span class="fa fa-lock"></span> Node Authentication</h1>

                  <p>Login or Register with:</p>

                  <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
                  <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Router>
          <div>
            <Switch>
              {/* <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default App;

