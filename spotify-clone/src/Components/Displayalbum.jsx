import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const Displayalbum = () => {
 const {id} =useParams();
  const albumdata= albumsData[id];


  return (
    <>
      <Navbar/>
      <div className=' mt-10 flex gap-8 flex-col md:flex-row md:items-end'>

        <img className='w-48 rounded' src={albumdata.image} alt="" />
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
            <h4>{albumdata.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b>Spotify</b>
                *12k Likes
                *<b>50songs,</b>
                about 1 hr 11 min
            </p>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p className='mr-4'><b>Title</b></p>
        <p>ALbum</p>
        <p className='hidden sm:block'>Date added</p>
        <img className='m-auto w-5' src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item,index)=>(
        <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                 <p className='text-white'>
                  <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                  <img className='inline w-10 mr-5' src={item.image} alt="" />
                  {item.name}
                 </p>
                 <p className='text-[15px]'>{albumdata.name}</p>
                 <p className='text-[15px] hidden sm:block' >1 day ago</p>
                 <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))}
    </>
  )
}

export default Displayalbum
