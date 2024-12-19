import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/auth';
import { useDispatch } from 'react-redux';
import { logout } from '../Store/authSlice';

const ProfileModal = ({ isModalOpen, toggleModal }) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);  // Create a reference to the modal
  const outsideClickRef = useRef(null); // Reference for outside click

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await appwriteService.logout();
      dispatch(logout());
      toggleModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Close modal if clicked outside of it
  useEffect(() => {
    // Function to detect click outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target) && outsideClickRef.current && !outsideClickRef.current.contains(event.target)) {
        toggleModal(false);  // Close modal if clicked outside
      }
    };

    // Add event listener for click
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggleModal]);

  if (!isModalOpen) return null;  // If the modal is not open, render nothing

  return (
    <div ref={outsideClickRef} className="absolute top-12 right-0 bg-gray-900 p-4 rounded-lg shadow-lg w-48 z-50">
      <ul className="flex flex-col gap-4" ref={modalRef}>
        <li>
          <Link
            to="/profile"
            onClick={() => toggleModal(false)} // Close modal after clicking Profile
            className="text-white hover:text-gray-400"
          >
            Profile
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-400"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileModal;
