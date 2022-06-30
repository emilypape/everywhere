import React, { useState, Fragment } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Login';
import Signup from '../Signup';

// import Auth from '';

function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className='mb-7'>
      <div className='flex mt-4 justify-between'>
        <Link to='/'>
          <div className='flex'>
            <Icon className='p-1 text-5xl ml-3' icon='wpf:worldwide-location' color='#ff385c' />
            <h1 className='text-coral font-bold p-1 text-2xl'>everywhere</h1>
          </div>
        </Link>
        <Menu as='div' className='z-50 relative right-3 inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-coral'>
              &#9776;
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">

              {/* When loggedIn = false */}
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => setShowModal(true)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Sign-up
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      onClick={() => setShowModal2(true)}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Login
                    </a>
                  )}
                </Menu.Item>
              </div>
              {/* ------------------ */}

              {/* When loggedIn = true */}
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Trips
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      to='/Favorites'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Favorites
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Sign-out
                    </a>
                  )}
                </Menu.Item>
              </div>
              {/* ------------------ */}
            </Menu.Items>
          </Transition>
        </Menu>
        {showModal ? (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl '>
                {/*content*/}
                <div className=' px-4 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                    <div className='text-xl font-semibold'>Sign Up</div>
                    <button
                      className='p-1 ml-auto  border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none '
                      onClick={() => setShowModal(false)}>
                      <span className='text-black'>x</span>
                    </button>
                  </div>
                  {/*body*/}
                  <Signup />
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
        {showModal2 ? (
          <>
            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
              <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                {/*content*/}
                <div className=' px-4 py-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                  {/*header*/}
                  <div className='flex justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                    <div className='text-xl font-semibold'>Login</div>
                    <button
                      className='ml-auto  border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none '
                      onClick={() => setShowModal2(false)}>
                      <span className='text-black'>x</span>
                    </button>
                  </div>
                  {/*body*/}
                  <Login />
                </div>
              </div>
            </div>
            <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
