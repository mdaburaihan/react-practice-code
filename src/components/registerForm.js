import React from 'react';
import Joi from "joi-browser";
import CommonForm from './commonform'

class RegisterForm extends CommonForm {

    state = {
        data: {
            username: "",
            password: "",
            name: ""
        },
        errors: {}
    } 

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().min(5).label("Password"),
        name: Joi.string().required().label("name"),
    }

    componentDidMount() {
        //this.username.current.focus()
    }

    
    

    doSubmit = () => {
        //call the server
        console.log("==handlseSubmit")
    }
    

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors}
        const errorMessage = this.validateProperty(input)

        if(errorMessage){
            errors[input.name] = errorMessage
        }else{
            delete errors[input.name]
        }

        const data = {...this.state.data};
        data[input.name] = input.value;
        this.setState({ data, errors })
    }
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handlseSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password")}
                    {this.renderInput("name", "Name")}
                    {this.renderButton("Register")}
                </form>
            </div>
        )
    }
}

export default RegisterForm;