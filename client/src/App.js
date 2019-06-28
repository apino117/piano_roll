import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div class="container" id="main-content-container">
          <div class="row" id="main-content-row">

            <h1>Piano Roll</h1>

            <div class="col-12" id="main-content-column">



              <div class="form-group row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Input a URL</label>
                <div class="col-sm-10">
                  <input type="text" readonly class="form-control-plaintext" id="staticURL" value="" placeholder="https://www.google.com" />
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

