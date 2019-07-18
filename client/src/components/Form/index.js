import React from "react";
import "./style.css";


function Form({ q, handleInputChange, handleUrlSubmit }) {
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
                    placeholder="For Example: http://reductress.com/"
                    name="q"
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="pull-right">
                <button
                    onClick={handleUrlSubmit}
                    type="submit"
                    className="btn btn-lg float-right"
                >Add</button>
            </div>
        </form>
    );
}

export default Form;