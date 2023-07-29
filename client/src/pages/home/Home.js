import React from 'react';
import Header from '../../components/header/Header';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import Feed from '../../components/feed/Feed';

const Home = () => {
  return (
    <div>
        <Header />
        <div className='flex justify-between'>
          <Leftbar/>
          <div className='grow'>
            <Feed />
          </div>
          <Rightbar />
        </div>
    </div>
  )
}

export default Home