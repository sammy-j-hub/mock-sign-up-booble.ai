import React from 'react';
import './form.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { FacebookLoginButton } from 'react-social-login-buttons';
import Facebook from './facebook'
function Register() {
    return(
        <Form className="login-form">
            <h3 className="text-center mb-30">
                Sign Up
            </h3>
             <h2 className="text-center">
                Create Account
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            {/* <FacebookLoginButton className="mt-3 mb-3"/> */}
            <Facebook className="mt-3 mb-3 center "/>
            
            <hr color="#424242" size="2"></hr>
        <FormGroup> 
            <Label></Label>
            <Input type="first" placeholder="First Name"></Input>
        </FormGroup>
        <FormGroup>
            <Label></Label>
            <Input type="last" placeholder="Last Name"></Input>
        </FormGroup>
        <FormGroup>
            <Label></Label>
            <Input type="email" placeholder="Email ID"></Input>
        </FormGroup>
        <FormGroup>
            <Label></Label>
            <Input type="password" placeholder="Password"></Input>
        </FormGroup>
        <Button className ="btn-lg btn-dark btn-block mt-4 mb-4 ">Submit</Button>
        
        </Form>
    );
}
export default Register