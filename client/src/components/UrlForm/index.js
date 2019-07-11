import React from "react";
import API from "../../utils/API"


class UrlForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const passedURL = this.state.value;

        alert('A URL was submitted: ' + passedURL);


        this.setState({ value: ' ' });
    }

    getWebsites = () => {
        API.getWebsites(this.state.q)
            .then(res =>
                this.setState({
                    websites: res.data
                })).catch(() => {
                    this.setState({
                        websites: [],
                        message: "something went wrong"
                    })
                })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    URL:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default UrlForm;