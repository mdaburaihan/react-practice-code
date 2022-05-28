import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            address: ''
        };
    }

    handleUsername = (event) => {
        this.setState({
            user_name: event.target.value
        })
    }

    handleAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(`${this.state.user_name} ${this.state.address}`)
        event.preventDefault();
    }


    render() {
        return (
            <React.Fragment>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                    Name:
                    <input type="text" name="name" value={ this.state.user_name } onChange={ this.handleUsername }/>
                    </label>
                    <label>
                    Address:
                    <textarea value={ this.state.address } onChange={ this.handleAddress }/>
                    </label>
                    <button>Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Form;