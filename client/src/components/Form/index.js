import React from "react";

function Form({ q, handleInputChange, handleFormSubmit }) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="Query">
                    <strong>Website</strong>
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
                    SUBMIT
                </button>
            </div>
        </form>
    );
}

export default Form;