# HTML Piano Roll

Welcome to HTML Piano Roll, a new technology designed to create music from sourcecode! How it works is you put in a URL, we then take tags from the HTML and convert them into musical notes.

## Getting Started

To get started you can do one of two things: you can put in a new URL and add that to our synth database or you can pick an existing URL and play the synth from that. Once a website it saved it cannot be submitted again. Invalid URLs will not be added into the database. 

### Prerequisites

The main prerequisite is Tone, it's a software to build and play synths. Otherwise cheerio axios and react are standard. 

There are some cool demos too to help figure out what you'd wanna do:

```https://tonejs.github.io/demos```

## Running the tests

Most of the tests are confirmed through the console so if things seem off check the logs. If a URL isn't valid for example it'll show in the console.

## Built Using

* [Cheerio](https://www.npmjs.com/package/cheerio) - Web Scraping
* [Tone](https://tonejs.github.io/) - Synthesizer
* [Axios](https://www.npmjs.com/package/axios) - API / Database querying
* [React](https://reactjs.org/) - Front-End UI Components
* [Mongoose DB](https://www.npmjs.com/package/mongoose) - Database Creation
* [Express](https://www.npmjs.com/package/express) - Server Creation
* [Dotenv](https://www.npmjs.com/package/dotenv) - Secure data encryption

## Contributing

Please read [CONTRIBUTING.md](https://github.com/standard/standard/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Owen Dennehey** - *Co-Creator, Research & Sonification* - (https://github.com/OwenDennehy95)

* **Alex Pino** - *Creator, Backend Construction, Code Architecture* - (https://github.com/apino117)

See also the list of [contributors](https://github.com/apino117/piano_roll/graphs/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE.md](https://opensource.org/licenses/ISC) file for details

## Acknowledgments

* First props go to [this link right here](https://teropa.info/blog/2016/07/28/javascript-systems-music.html) for introducing me to Steve Reich's [_It's Gonna Rain_](https://www.youtube.com/watch?v=vWN9I-qa9GQ) - the piece of music responsible for inspiring this idea

* Second props go to all the artists who showed me that "music" was a term open for discussion and interpretation:
    * The Beatles
    * Phillip Glass
    * Pink Floyd
    * Beastie Boys
    * Radiohead
    * Eels
    * Beck
    * Flying Lotus
    * Animal Collective
    * Bassnectar
    * Amp Live
    * Superorganism
    * Four Tet
    * Boards of Canada
    * Daedelus
    * Damon Albarn 
    * Aphex Twin
    * Solange
    * John Cage
    * Steve Reich

* Special thanks to Amanda for being there through this all and to Louise, Michael and Cheech for their unrelenting belief in me despite my protests


## Heroku

https://guarded-escarpment-75375.herokuapp.com/