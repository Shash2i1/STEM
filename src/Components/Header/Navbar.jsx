// Navbar.js
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProfileModal from '../ProfileModal'; // Import the ProfileModal component

const Navbar = () => {
  // Retrieve the authentication status from Redux state
  const status = useSelector(state => state.auth.authStatus);
  const [ismodal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!ismodal);  // Toggle modal visibility
  };

  return (
    <section className="flex justify-center w-full sticky top-0 z-50 md:px-12 bg-gray-900 py-2">
      <div className="flex justify-between items-center w-full max-w-[1400px] p-2 sm:p-4 px-8">
        {/* Left section: Logo */}
        <Link to='/'>
          <div className="flex items-center gap-12">
            <img src="./img/Stem-logo.png" alt="Logo" className="h-[40px]" />
          </div>
        </Link>

        {/* Right section: Conditional Profile Icon */}
        <div className="flex items-center gap-5 relative">
          {status ? (
            <button onClick={handleModal}>
              <div>
                <Icon
                  icon="iconamoon:profile-circle-fill"
                  width="30"
                  height="30"
                  style={{ color: '#fff' }}
                />
              </div>
            </button>
          ) : (
            <Link to='/login'>
              <h2 className="text-white">SignIn</h2>
            </Link>
          )}

          {/* Profile Modal */}
          <ProfileModal
            isModalOpen={ismodal}
            toggleModal={setModal}  // Function to toggle modal visibility
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
