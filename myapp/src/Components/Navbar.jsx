import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { StoreContext } from './Context/ContextApi';
import Loading from '../Screens/Loading';
import ButtonProfile from './MyProfile/ButtonProfile';

const Navbar = ({ setShowModal, setLogout, check }) => {
  const { selectItems, loading, setIsSidebarOpen, isSidebarOpen } = useContext(StoreContext)
  const [activeLink, setActiveLink] = useState(null);
  const navigate = useNavigate();


  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link);
  };



  return (
    <div className="bg-[#4CAF50] text-white">
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:hidden backdrop-blur-sm fixed inset-0 z-50 bg-black bg-opacity-50`} onClick={() => setIsSidebarOpen(false)}></div>
      <div className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-green-500 transform transition duration-300 ease-in-out`}>
        <div className="flex justify-end p-4">
          <button onClick={() => setIsSidebarOpen(false)}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center gap-10 mt-6">
          <Link to="/menu" className={`text-xl font-Ubuntu ${activeLink === '/menu' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleLinkClick('/menu')}>menu</Link>
          <Link to="/contact" className={`text-xl font-Ubuntu ${activeLink === '/contact' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleLinkClick('/contact')}>contact us</Link>
          {
            check && check ? (
              <div onClick={() => { setLogout(true); setIsSidebarOpen(false) }} className={`block md:hidden font-Ubuntu text-lg mr-2 ${activeLink === 'logout' ? 'text-neutral-500' : ''}`}>
                Logout
              </div>
            ) : (
              <button onClick={() => { setShowModal(true); setIsSidebarOpen(false) }} className={`block md:hidden font-Ubuntu text-lg mr-2 ${activeLink === 'login' ? 'text-neutral-500' : ''}`}>
                Login
              </button>
            )
          }
          {/* <Link to="/mycart" className={`text-xl font-Ubuntu mb-4 ${activeLink === '/cart' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleLinkClick('/cart')}>cart</Link> */}
        </div>
      </div>

      {/* Navbar */}
      <div className="flex text-white justify-between items-center h-16 px-4 md:px-8 lg:px-16">
        <div className="flex w-full justify-between items-center">
          <div className='flex flex-row gap-4'>
            <button onClick={() => handleLinkClick('/')} className={`text-3xl font-Ubuntu md:text-3xl font-bold`}>YumYatra</button>
            <div className='hidden md:flex lg:flex-row ml-16 flex-row items-center gap-7'>
              <Link to="/menu" className={`text-xl font-Ubuntu ${activeLink === '/menu' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleLinkClick('/menu')}>menu</Link>
              <Link to="/contact" className={`text-xl font-Ubuntu ${activeLink === '/contact' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleLinkClick('/contact')}>contact us</Link>
            </div>
          </div>
          <div className="md:hidden items-center justify-end text-end flex flex-row-reverse gap-6 w-full ml-4">
            <button className='mr-2' onClick={() => setIsSidebarOpen(true)}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <div onClick={() => handleLinkClick('/mycart')} className='flex items-end justify-end relative w-full'>
              <FaCartShopping size={20} />
              {
                selectItems.length > 0 && <p className='absolute -right-3 w-2 h-2 rounded-full bg-red-600 flex top-0'></p>
              }
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-between w-fit items-center">
          <button className={`mr-5 md:block hidden ${activeLink === '/mycart' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => handleLinkClick('/mycart')}>
            <div className='flex relative w-full'>
              <FaCartShopping size={30} />
              {
                selectItems.length > 0 && <p className='absolute -right-3 w-2 h-2 rounded-full bg-red-600 flex top-0'></p>
              }
            </div>
          </button>
          <div className='w-full  px-3'>
            {
              loading && loading ? (
                <Loading />
              ) : (
                check && check ? (
                  <div onClick={() => { setActiveLink('profile'); navigate('/user/profile') }} className={`cursor-pointer ${activeLink === 'profile' ? 'text-slate-600' : ''}`}>
                    <ButtonProfile />
                  </div>
                ) : (
                  <button onClick={() => { setShowModal(true); setActiveLink('login'); }} className={`hidden md:inline-block font-Ubuntu bg-[#2d2c2c] hover:border-slate-600 hover:text-white duration-300 text-[#fd0] px-4 text-md font-[00] h-9 w-20 rounded-md mr-2`}>
                    Login
                  </button>
                )
              )
            }
          </div>



        </div>
      </div>
    </div>
  );
}

export default Navbar;
