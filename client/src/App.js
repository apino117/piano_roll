import React, { Component } from "react";

// Router Stuff
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Form from "./components/Form/index";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";

const exampleObject = {
  tags: [
    1039,
    105,
    118,
    110,
    97,
    118,
    100,
    105,
    1198,
    100,
    105,
    118,
    100,
    105,
    118,
    100,
    105,
    118,
    1190,
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
    title: "Reductress » Women's News. Feminized.",
    objectForNotes: {},
    audioContext: {},
    websites: [],
    q: ""
  }

  mapToStandard = (number) => {

    let numberToReturn = number;

    while (numberToReturn > 127) {
      numberToReturn -= 127;
      // console.log(numberToReturn);
    }
    return numberToReturn
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
      .then(() => API.getUrl(urlToScrape.url));
    // .then(() => API.retrieveUrl(urlToScrape));

    // let objectToUse = API.retrieveUrl(urlToScrape);

    // console.log("this is the objectToUse: ", objectToUse);

    // console.log(urlToScrape);

    this.setState({
      q: " "
    });
    // this.getBooks();
  };

  handleTitleSubmit = event => {
    event.preventDefault();


    console.log("title submitted!")
    const title = {
      title: exampleObject.title
    };

    this.setState({
      q: " "
    });
    // this.getBooks();
  };

  schedulePlay = (note, length, time, synth) => {
    const triggerFunc = (triggerTime) => {
      synth.triggerAttackRelease(note, length, triggerTime)
    }
    Tone.Transport.schedule(triggerFunc, time)
  }

  playSynth = () => {


    const synth = new Tone.FMSynth().toMaster();
    exampleObject.tags.forEach((tag, index) => {
      this.schedulePlay(this.getNoteObject()[tag], '16n', index, synth)
    })
    synth.harmonicity.value = 0.6;
    synth.detune.value = -1200;
    synth.modulationIndex.value = 20;
    synth.oscillator.type = "sine";
    synth.envelope.attack = 0.01;
    synth.envelope.decay = 0.01;
    synth.envelope.sustain = 1;
    synth.envelope.release = 0.08;
    synth.modulation.type = "square";
    synth.modulationEnvelope.attack = 0.07;
    synth.modulationEnvelope.decay = 1;
    synth.modulationEnvelope.sustain = 1;
    synth.modulationEnvelope.release = 1;
    synth.volume.value = -12;
    Tone.Transport.toggle();
    Tone.Transport.bpm.value = 250; //nice to have this be adjustible by the user..
    this.state.audioContext.resume().then(() => {
      console.log('Playback resumed successfully');
    });


  }

  // returnValue()


  render() {
    return (
      <>
        <SearchForm

          handleInputChange={this.handleInputChange}
          title={this.state.title}//
          handleTitleSubmit={this.handleTitleSubmit}
          titles={this.state.websites}

        >

        </SearchForm>
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

