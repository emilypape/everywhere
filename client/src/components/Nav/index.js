import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN, ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Nav(props) {
  const [login] = useMutation(LOGIN);
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [loginFormState, setLoginFormState] = useState({ email: '', password: '' });
  const [userFormData2, setUserFormData2] = useState({ username: '', email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    console.log(loginFormState)
    // login logic here!
    try {
      const mutationResponse = await login({
        variables: { email: loginFormState.email, password: loginFormState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  

  const handleFormSignupSubmit = async (event) => {
    event.preventDefault();

    // signup logic here!
    const mutationResponse = await addUser({
      variables: {
        email: userFormData2.email,
        password: userFormData2.password,
        username: userFormData2.username
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormState({ ...loginFormState, [name]: value });
  };

  const handleInputSignupChange = (event) => {
    const { name, value } = event.target;
    setUserFormData2({ ...userFormData2, [name]: value });
  };

  return (
    <div className='mb-7'>
      <div className='flex mt-4 justify-between'>
        <Link to='/'>
          <div className='flex'>
            <Icon className='p-1 text-5xl ml-3' icon='wpf:worldwide-location' color='#ff385c' />
            <h1 className='text-coral font-bold p-1 text-2xl'>everywhere</h1>
          </div>
        </Link>
        <div className='flex mr-3 '>
          <h1 className='cursor-pointer text-black font-medium p-3' onClick={() => setShowModal2(true)}>
            Signup
          </h1>
          <h1 className='cursor-pointer text-black font-medium p-3' onClick={() => setShowModal(true)}>
            Login
          </h1>
          {showModal ? (
            <>
              <div className='flex items-center justify-center'>
                <div className='p-10'>
                  <p className='text-black-700 text-xl mb-3 text-center'>Please Login</p>
                  <form onSubmit={handleLoginFormSubmit}>
                    <input
                      type='text'
                      placeholder='Your email'
                      name='email'
                      onChange={handleLoginInputChange}
                      className='text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2'
                    />
                    <input
                      type='password'
                      placeholder='Your password'
                      name='password'
                      onChange={handleLoginInputChange}
                      className='text-sm text-gray-base w-full mr-3 
                      py-5 px-4 h-2 border border-gray-200 
                      rounded mb-2'
                    />
                    <button
                      type='submit'
                      className='bg-red-700 text-white w-full mt-4'
                      onClick={() => setShowModal(false)}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : null}
          {showModal2 ? (
            <>
              <div className='flex items-center justify-center'>
                <div className='p-10'>
                  <p className='text-black-700 text-xl mb-3 text-center'>Sign up!</p>
                  <form onSubmit={handleFormSignupSubmit}>
                    <input
                      type='text'
                      placeholder='Username'
                      name='username'
                      onChange={handleInputSignupChange}
                      value={userFormData2.username}
                      className='text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2'
                      required
                    />
                    <input
                      type='text'
                      placeholder='Email address'
                      name='email'
                      onChange={handleInputSignupChange}
                      value={userFormData2.email}
                      className='text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2'
                      required
                    />
                    <input
                      type='password'
                      placeholder='Password'
                      name='password'
                      onChange={handleInputSignupChange}
                      value={userFormData2.password}
                      className='text-sm text-gray-base w-full mr-3 
                      py-5 px-4 h-2 border border-gray-200 
                      rounded mb-2'
                      required
                    />
                    <button
                      type='submit'
                      className='bg-red-700 text-white w-full mt-4'
                      onClick={() => setShowModal2(false)}>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Nav;
