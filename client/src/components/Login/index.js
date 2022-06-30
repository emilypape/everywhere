import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Login(props) {
    const [showModal2, setShowModal2] = useState(false);

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);

    const handleFormLoginSubmit = async (event) => {
        event.preventDefault();
        // login logic here!
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            const token = data.login.token;
            console.log(token);
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }

    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleFormLoginSubmit}>
            <input
                type="text"
                placeholder="Your email"
                name="email"
                id='email'
                onChange={handleInputChange}
                value={formState.email}
                className="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2"
                required
            />
            <input
                type="password"
                placeholder="Your password"
                name="password"
                onChange={handleInputChange}
                value={formState.password}
                className="text-sm text-gray-base w-full mr-3 
                      py-5 px-4 h-2 border border-gray-200 
                      rounded mb-2"
                required
            />
            {/*footer*/}
            <div className='flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b'>
                <button
                    type="submit"
                    className="p-1 bg-red-700 text-white w-full mt-4"
                    onClick={() => setShowModal2(false)}
                >
                    Login
                </button>
            </div>
        </form>
    )

}

export default Login;