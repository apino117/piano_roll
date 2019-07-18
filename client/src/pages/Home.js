import React, { Component } from "react";
import Form from "../components/Form/index";
import API from "../utils/API";
import SearchForm from "../components/SearchForm/index";
import Alert from "../components/Alert/index";
import Button from "../components/Button/index";
import Grid, { Container, Row, Col } from "../components/Grid/index";

const Tone = require("tone");

class Home extends Component {

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

    // ==================================================|||===================================================== //
    // ======================== *********** ||| GENERAL REACT FUNCTIONS || *********** ======================== //
    // ======================== ***********                                *********** ======================== //


    componentDidMount = () => {

        this.runTheList();

        const context = new AudioContext();

        this.setState({
            audioContext: context,
            loadMessage: "Load Synth"
        });
    };

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

    };

    // ==================================================|||===================================================== //
    // ======================== *********** ||||| FORM / API FUNCTIONS ||| *********** ======================== //
    // ======================== ***********                                *********** ======================== //


    runTheList = () => {
        API.getUrlsList()
            .then(res => this.setState({ titles: this.pullTitlesFromResults(res.data) }))
            .then(() => console.log(this.state.titles))
            .catch(err => console.log(err));
    }

    pullTitlesFromResults = (array) => {

        let justTitles = [];
        for (let i = 0; i < array.length; i++) {
            justTitles.push(array[i].title)
        };
        return justTitles;
    }

    handleSearchInput = event => {
        this.setState({ search: event.target.value });
        console.log(this.state.search)
    }

    handleUrlSubmit = event => {
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
    };

    handleTitleSubmit = event => {
        event.preventDefault();
        API.setNoteObjectByTitle(this.state.search)
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

    // ==================================================|||===================================================== //
    // ======================== *********** |||||| MUSIC FUNCTIONS ||||||| *********** ======================== //
    // ======================== ***********                                *********** ======================== //


    mapToStandard = (number) => {
        let numberToReturn = number;
        while (numberToReturn > 127) {
            numberToReturn -= 127;
            // console.log(numberToReturn);
        }
        return numberToReturn
    };

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


    // ==================================================|||===================================================== //
    // ======================== *********** ||||||||| JSX RENDER ||||||||| *********** ========================= //

    render() {
        return (
            <>
                <Container id="main-container">
                    <h1>HTML Piano Roll</h1>
                    <h2>Hear your favorite websites!</h2>
                    <Row id="main-row">

                        {/* ---------------------------------------------------------------------------------------------------------- */}
                        {/* =================================== Form to scroll through database ====================================== */}
                        {/* ---------------------------------------------------------------------------------------------------------- */}

                        <Col size="md-6">
                            <Alert type="danger" style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>{this.state.error}</Alert>
                            <SearchForm
                                handleInputChange={this.handleSearchInput}
                                handleTitleSubmit={this.handleTitleSubmit}
                                titles={this.state.titles}
                            ></SearchForm>
                            <Button type="submit" onClick={this.handleTitleSubmit} className="btn btn-success">
                                {this.state.loadMessage}
                            </Button>
                        </Col>

                        {/* ---------------------------------------------------------------------------------------------------------- */}
                        {/* ======================================== Form to input new websites ====================================== */}
                        {/* ---------------------------------------------------------------------------------------------------------- */}

                        <Col size="md-6">
                            <button type="submit" onClick={this.playSynth} className="btn btn-primary mb-2">Play Synth: {this.state.searchMessage}</button>
                            <Form
                                handleInputChange={this.handleInputChange}
                                handleUrlSubmit={this.handleUrlSubmit}
                                q={this.state.q}
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;

