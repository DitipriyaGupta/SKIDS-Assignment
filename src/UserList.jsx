
import React, { useState } from 'react';
import Modal from 'react-modal';
import UserModal from './User';
Modal.setAppElement('#root');
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
    closeModal();
  };

  const updateUser = (userId, userData) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, ...userData } : user
    );
    setUsers(updatedUsers);
    closeModal();
  };

  const deleteUser = (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
  };

  const editUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const modalStyles = {
    overlay: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: '300px',
      height:'350px',
      margin: 'auto',
    },
  };

  return (
    <div>
     
<button className='bg-blue-100 rounded px-4 py-2 text-xl text-blue-500 absolute top-6 right-6 font-bold' onClick={openModal}>Add User</button>
     <h1 class='text-xl text-center pt-14 p-10 font-semibold '>User List</h1>
     {users.length > 0 ? (
<div class="w-full max-w-sm p-4 bg-slate-200 border border-gray-200 rounded-lg shadow sm:p-8 mx-auto">
  
   <div class="flow-root  p-3 ">
   <ul role="list" class="divide-y space-y-4 ">
   {users?.map((user) => (
      
          <li  key={user.id }class="px-5 sm:py-4 bg-blue-200 p-2 rounded-lg ">
          <div class="flex items-center space-x-4 ">
             
              <div class="flex-1 min-w-0 text-center">
                  <p class="text-2xl font-bold text-blue-500 truncate ">
                  <h3>{user.name}</h3>
                  </p>
                  <p class="text-sm font-medium text-gray-500 truncate ">
                    Email : {user.email}
                  </p>
                  <p class="text-sm font-medium  text-gray-500 truncate">
                     Phone : {user.phone}
                  </p> <div class="inline-flex p-4 text-base font-semibold text-gray-900 dark:text-white space-x-2">
              <button className='bg-slate-200 p-1 rounded border border-black' onClick={() => editUser(user)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
</button>
            <button className='bg-slate-200 p-1 rounded border border-black' onClick={() => deleteUser(user.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</button>
              </div>
              </div>
             
          </div>
      </li>
        ))} 
            
        </ul>
   </div>
</div>) : null}


 
<div >
    <div >
    <Modal isOpen={isModalOpen} onRequestClose={closeModal}  shouldCloseOnOverlayClick={false}  style={modalStyles}>
        <UserModal
          closeModal={closeModal}
          addUser={addUser}
          updateUser={updateUser}
          user={selectedUser}
         
        />
      </Modal>
       
           
          
            
        </div>
    </div>
</div>

 

  );
};




export default UserList;
