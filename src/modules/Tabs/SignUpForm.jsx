import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

// styles
import s from './Tabs.module.css';
import b from '../../components/Button/Button.module.css';
import i from '../../components/Input/Input.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

class SignUpForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, phone, password } = this.state;
    console.log(
      `Name: ${name}, Email: ${email}, Phone: ${phone}, Password: ${password}`,
    );

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, email, phone, password } = this.state;
    return (
      <div className={s.signUp}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <Input
            className={i.input}
            type="name"
            placeholder="Name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
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
            type="tel"
            placeholder="Phone"
            name="phone"
            value={phone}
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
            Sign up
          </Button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
