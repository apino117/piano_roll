import React, { Component } from "react";
import "./App.css";
const Tone = require("tone");

class App extends Component {

  state = {
    audioContext: {}
  }

  componentDidMount() {

    const context = new AudioContext();

    this.setState({ audioContext: context });
  }

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


  render() {
    return (
      <>
        <div className="container" id="main-content-container">
          <div className="row" id="main-content-row">

            <h1>Piano Roll</h1>

            <div className="col-12" id="main-content-column">



              <div className="form-group row">
                <label className="col-sm-2 col-form-label">Input a URL</label>
                <div className="col-sm-10">
                  <input type="text" readOnly className="form-control-plaintext" id="staticURL" value="" placeholder="https://www.google.com" />
                  <button type="submit" onClick={this.playSynth} className="btn btn-primary mb-2">Submit</button>
                </div>
              </div>





            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;

