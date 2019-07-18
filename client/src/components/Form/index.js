import React from "react";
import "./style.css";


function Form({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="Query">
                    <strong>Add a new Website:</strong>
                </label>
                <input
                    className="form-control"
                    id="Website"
                    type="text"
                    value={q}
                    placeholder="http://reductress.com/"
                    name="q"
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="pull-right">
                <button
                    onClick={handleFormSubmit}
                    type="submit"
                    className="btn btn-lg btn danger float-right"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export default Form;