import React, { Component } from 'react';
import Joi from "joi-browser";
import Input from './input'
import CommonForm from './commonform'

class LoginForm extends CommonForm {
    username = React.createRef();

    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    } 

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    }

    componentDidMount() {
        //this.username.current.focus()
    }

    
    

    doSubmit = () => {
        //call the server
        console.log("==handlseSubmit")
    }
    

    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handlseSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}

export default LoginForm;