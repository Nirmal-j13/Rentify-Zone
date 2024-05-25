import React from 'react'
import Navbar from '../Navbar/Navbar'
import '../Home/Home.css'
import house from '../Home/house.png'
export const Home = () => {
  return (
    <div>
    <Navbar/>
    <div className='home-bg'>
           <div className='home-left'>
              <p className='home-heading'>Rentify Zone Era</p>
              <p className='home-heading'>Of Rent Houses</p>

              <p className='home-heading-1'>The Accuracy and Parsing denotes Strength Quality of the Resume</p>
              <p className='home-heading-2'>
                <b>Rentify is a dynamic real estate platform designed to simplify the process of buying and selling houses. 
                  By leveraging advanced technology and user-friendly interfaces, Rentify streamlines transactions, 
                  ensuring efficiency and transparency for both buyers and sellers. 
                  The platform offers comprehensive tools to list properties, schedule viewings, and manage offers, catering to the modern consumer's need for convenience and reliability. 
                  </b>  
              </p>
           </div>
           <div className='home-right'>
                <img  src={house} alt='profile' height={300} width={300}/>
           </div>
         </div>
   
    </div>
  )
}
