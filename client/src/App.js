import React, { Component } from "react";

// Router Stuff
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Profile from "./pages/Profile";
import Form from "./components/Form/index";
import API from "./utils/API";
import SearchForm from "./components/SearchForm";
import Alert from "./components/Alert/index";
import Button from "./components/Button";

const Tone = require("tone");

class App extends Component {

  state = {
    objectForNotes: {},
    audioContext: {},
    search: "",
    titles: [],
    results: [],
    q: "",
    error: "",
    loadMessage: "",
    searchMessage: "",
  }

  mapToStandard = (number) => {

    let numberToReturn = number;

    while (numberToReturn > 127) {
      numberToReturn -= 127;
      // console.log(numberToReturn);
    }
    return numberToReturn
  }

  runTheList = () => {
    API.getUrlsList()
      .then(res => this.setState({ titles: this.getTitlesFromResults(res.data) }))
      .then(() => console.log(this.state.titles))
      .catch(err => console.log(err));
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

  getTitlesFromResults = (array) => {

    let justTitles = [];

    for (let i = 0; i < array.length; i++) {
      justTitles.push(array[i].title)
    };

    // console.log(justTitles);
    return justTitles;
  }

  componentDidMount = () => {

    this.runTheList();

    const context = new AudioContext();

    this.setState({
      audioContext: context,
      loadMessage: "Load Synth"
    });
  }

  handleInputChange = event => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

  };

  handleSearchInput = event => {
    this.setState({ search: event.target.value });
    console.log(this.state.search)
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const urlToScrape = {
      url: this.state.q
    };

    API.storeUrl(urlToScrape)
      .then(() => API.getUrl(urlToScrape.url))
      .then(() => {
        this.runTheList();
      })

      
    this.setState({
      q: " ",
    });
    // this.getBooks();
  };

  handleTitleSubmit = event => {
    event.preventDefault();

    // alert("work!");

    console.log(this.state.search);

    API.getNoteObjectByTitle(this.state.search)
      .then(res => {
        console.log("this is the result data", res.data)
        this.setState({
          objectForNotes: res.data
        })
      })
      .then(() => {
        console.log("this is the objectForNotes", this.state.objectForNotes)
      })

    this.setState({
      loadMessage: "Synth Loaded",
      searchMessage: this.state.search
    })
  };

  schedulePlay = (note, length, time, synth) => {
    const triggerFunc = (triggerTime) => {
      synth.triggerAttackRelease(note, length, triggerTime)
    }
    Tone.Transport.schedule(triggerFunc, time)
  }

  playSynth = () => {


    const synth = new Tone.FMSynth().toMaster();
    this.state.objectForNotes.tags.forEach((tag, index) => {
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

  render() {
    return (
      <>

        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm

          handleInputChange={this.handleSearchInput}
          handleTitleSubmit={this.handleTitleSubmit}
          titles={this.state.titles}


        >

        </SearchForm>
        <Button type="submit" onClick={this.handleTitleSubmit} className="btn btn-success">
          {this.state.loadMessage}
        </Button>

        {/* ========================================================================= */}
        <div className="container" id="main-content-container">
          <div className="row" id="main-content-row">

            <h1>Piano Roll</h1>

            <div className="col-12" id="main-content-column">

              <button type="submit" onClick={this.playSynth} className="btn btn-primary mb-2">Play Synth: {this.state.searchMessage}</button>
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
              {/* <div class="container">

                <div class="jumbotron text-center">
                  <h1><span class="fa fa-lock"></span> Node Authentication</h1>

                  <p>Login or Register with:</p>

                  <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
                  <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a>
                </div>

              </div> */}
            </div>
          </div>
        </div>
        {/* <Router>
          <div>
            <Switch> */}
        {/* <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} /> */}
        {/* <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router> */}
      </>
    );
  }
}

export default App;

