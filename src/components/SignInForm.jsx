import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {signIn} from '../actions/authAction'

class SignInForm extends Component {
  static propTypes = {
    signIn: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
        Username: "",
        Password: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const loginVM = {
        Username: this.state.Username,
        Password: this.state.Password
    };

    this.props.signIn(loginVM);


    console.log(this.props.data)
  }



  render() {
    return (
      <div>
        <h1>Login</h1>

        <form onSubmit={this.onSubmit}>
          <div>
            <label>User Name:</label>
            <br />
            <input
              type="text"
              name="Username"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />

          <div>
            <label>Password:</label>
            <br />
            <input
              type="password"
              name="Password"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>

          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
    null,
    { signIn }
  )(SignInForm);
