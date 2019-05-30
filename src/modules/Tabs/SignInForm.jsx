import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

// styles
import s from './Tabs.module.css';
import b from '../../components/Button/Button.module.css';
import i from '../../components/Input/Input.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { onSignIn } = this.props;
    console.log(`Email: ${email}, Password: ${password}`);
    // this.reset();
    onSignIn();
  };

  // reset = () => {
  //   this.setState({ ...INITIAL_STATE });
  // };

  render() {
    const { email, password } = this.state;
    return (
      <div className={s.signIn}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <Input
            className={i.input}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Input
            className={i.input}
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <Button className={b.btn} type="submit">
            Sign in
          </Button>
        </form>
      </div>
    );
  }
}

export default SignInForm;
