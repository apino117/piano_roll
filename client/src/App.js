import React, { Component } from "react";

// Router Stuff
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Form from "./components/Form/index";
import API from "./utils/API";


const Tone = require("tone");

class App extends Component {

  state = {
    audioContext: {},
    websites: [],
    q: ""
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

    const urlToScrape = this.state.q;

    API.alert(urlToScrape);

    console.log(urlToScrape);

    this.setState({
      q: " "
    });
    // this.getBooks();
  };

  playSynth = () => {



    const synth = new Tone.FMSynth().toMaster();
    //schedule a series of notes to play as soon as the page loads
    synth.triggerAttackRelease('C4', '4n', '8n')
    synth.triggerAttackRelease('E4', '8n', Tone.Time('4n') + Tone.Time('8n'))
    synth.triggerAttackRelease('G4', '16n', '2n')
    synth.triggerAttackRelease('B4', '16n', Tone.Time('2n') + Tone.Time('8t'))
    synth.triggerAttackRelease('G4', '16', Tone.Time('2n') + Tone.Time('8t') * 2)
    synth.triggerAttackRelease('E4', '2n', '0:3')

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

