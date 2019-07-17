import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="title">Website name:</label>
        <input
          value={props.title}
          onChange={props.handleInputChange}
          name="search"
          list="titles"
          type="text"
          className="form-control"
          placeholder="Select a title to begin"
          id="title"
        />
        <datalist id="titles">

          {props.titles.map(title => (
            <option value={title} key={title} />
          ))}
          {/* <option value={props.titles[0]} key={props.titles[0]} /> */}
        </datalist>
        <button type="submit" onClick={props.handleTitleSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
