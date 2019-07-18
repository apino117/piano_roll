import React from "react";
import "./style.css";
import Button from "../Button/index"


function Form({ q, handleInputChange, handleUrlSubmit }) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="Query">
                    <strong>Add a new website:</strong>
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
                <Button
                    onClick={handleUrlSubmit}
                    type="submit"
                    className="btn-light mb-2 float-right"
                >Add</Button>
            </div>
        </form>
    );
}

export default Form;