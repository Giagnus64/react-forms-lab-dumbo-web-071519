import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeState = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    if(this.state.username !== '' && this.state.password !== ''){
      this.props.handleLogin(this.state);
    }
  }

  render() {
    return (
      <form onSubmit={event => this.submitForm(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={(event) => this.changeState(event)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={(event) => this.changeState(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
