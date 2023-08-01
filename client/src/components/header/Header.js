// Nav bar
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
const userIcon = require('../../assets/icons/user_icon.png');
const msgIcon = require('../../assets/icons/message_icon.png');
const notificationIcon = require('../../assets/icons/notifications_icon.png');
const homeicon = require('../../assets/icons/home_icon.png');

const Header = () => {

  const { user } = useContext(AuthContext);
  const PF = process.env.NODE_IMG_FOLDER;

  return (
    <div className='border flex ps-1 pe-1 justify-center h-14'>
        <div className='p-2 self-center'>
          <Link to="/">
            <span className='text-blue-500 font-bold text-2xl ps-5'>SocialTag</span>
          </Link>
        </div>
        <div className='flex flex-grow p-2 gap-5 self-center justify-center'>
            <div className='p-1 flex gap-1'>
              <img className='w-10 h-10 p-2' src={homeicon} alt="" /> 
              <p className='self-center'>Home</p>
            </div>
            <input className='border self-center ps-3 rounded-md h-7 w-56' type="text" placeholder="Search." />
            <div className='p-1 self-center'>Timeline</div>
        </div>
        <div className='flex self-center gap-5 p-2'>
            <img className='w-10 h-10 p-2' src={msgIcon} alt="Nothing" />
            <img className='w-10 h-10 p-2' src={notificationIcon} alt="Nothing" />
            <Link to={`/profile/${user.username}`}>
              <img className='w-10 h-10 p-2' src={user.profilePicture ? PF+user.profilePicture : userIcon} alt="Nothing" />
            </Link>
        </div>
    </div>
  )
}

export default Header