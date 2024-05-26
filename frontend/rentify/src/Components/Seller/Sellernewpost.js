import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { url } from '../../url';
export const Sellernewpost = () => {
    let navigate=useNavigate();
    const [place,setplace]=useState("");
    const [area,setarea]=useState("");
    const [noofbed,setnoofbed]=useState();
    const [noofbath,setnoofbath]=useState();
    const [hospitals,sethospitals]=useState();
    const [collegenearby,setcollegenearby]=useState([]);

    const HandleSubmit=async(e)=>{
        try{
            e.preventDefault();
            await fetch(`${url}/seller/sellerpost`, {
                method: "POST",
                body: JSON.stringify({
                     place:place,
                     area:area,
                     noofbed:noofbed,
                     noofbath:noofbath,
                     hospitals:hospitals,
                     collegenearby:collegenearby
                }),   
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((data)=>{
                console.log(data)
            })
            alert("Post Created")
            navigate('/sellerpost')


       }
       catch(err)
       {

       }
    }

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <Link to="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Rentify Zone</span>
    </Link>
                  
                        <h1 class="mb-4 text-1xl text-center">Sign up here!</h1>
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Place" 
                            value={place}
                            onChange={(e)=>{setplace(e.target.value)}}/>

                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Area" 
                            value={area}
                            onChange={(e)=>{setarea(e.target.value)}}/>
    
                        <input 
                            type="number"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="No of Beds"
                            value={noofbed} 
                            onChange={(e)=>{setnoofbed(e.target.value)}}/>
                        
                        <input 
                            type="number"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="No of Bathrooms"
                            value={noofbath} 
                            onChange={(e)=>{setnoofbath(e.target.value)}}/>

                        
                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Hospitals" 
                            value={hospitals}
                            onChange={(e)=>{sethospitals(e.target.value)}}/>

                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="collegenearby" 
                            value={collegenearby}
                            onChange={(e)=>{setcollegenearby(e.target.value)}}/>
                        
    
                        <button type="button" class="text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={HandleSubmit}>
                        Create Post</button>
    
                        <div class="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the 
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and 
                            <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
 )
}
