
import React, { useState } from 'react';

const User = ({ closeModal, addUser, updateUser, user }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phone, setPhone] = useState(user ? user.phone : '');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (name.trim() === '') {
      errors.name ='Name is required';
    }

    if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      errors.email = 'Email is not valid';
    }

    if (!phone.match(/^\d{10}$/)) {
      errors.phone = 'Phone number is not valid';
    }

    setErrors(errors);
   return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const userData = {
        name: name,
        email: email,
        phone: phone,
      };

      if (user) {
        updateUser(user.id, userData);
      } else {
      
        addUser(userData);
      }
    }
  };

  return (
    <div >
       <button  onClick={closeModal} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex absolute top-0 right-0" >
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
      <h2 className='text-xl text-blue-400 font-semibold text-center p-2'>{user ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit} >
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="name" >Name</label>
          <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone</label>
          <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-outline"
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className='space-x-3 absolute right-0 p-5 font-semibold'>
        <button className='bg-green-500 px-4 py-2 rounded' type="submit">{user ? 'Update' : 'Add'}</button>
        <button className='bg-red-500 px-4 py-2 rounded' type="button" onClick={closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default User;
