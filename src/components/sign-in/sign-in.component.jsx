import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' })
  }

  render() {
    return (
      <div className='sign-in' onSubmit={ () => this.handleSubmit }>
        <h1 className=''>I already have an account</h1>
        <span className=''>Sign in with your email and password</span>
        <form>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email}
            handleChange={ () => this.handleChange }
            label='email'
          />
          <FormInput 
            name='password' 
            type='password' 
            handleChange={ () => this.handleChange } 
            value={this.state.email}
            label='password'
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton type='button' onClick={ signInWithGoogle } isGoogleSignIn> 
              Sign in with Google 
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;