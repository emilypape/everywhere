import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Signup(props) {

    const [formState, setFormState] = useState({username: '', email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSignupSubmit = async (event) => {
        event.preventDefault();

        // signup logic here!
        const mutationResponse = await addUser({
            variables: {
                username: formState.username,
                email: formState.email,
                password: formState.password
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    }




    return (
        <form onSubmit={handleFormSignupSubmit}>
            <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={userFormData2.username}
                className="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2"
                required
            />
            <input
                type="text"
                placeholder="Email address"
                name="email"
                onChange={handleChange}
                value={userFormData2.email}
                className="text-sm text-gray-base w-full 
                      mr-3 py-5 px-4 h-2 border 
                      border-gray-200 rounded mb-2"
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={userFormData2.password}
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
                    Submit
                </button>
            </div>
        </form>
    )
}

export default Signup;