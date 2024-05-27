import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../../url';
export const Seller = () => {
    let navigate=useNavigate();
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const HandleSubmit=async(e)=>{
      try{
        e.preventDefault();
        if(email.length==null)
            {
                alert('enter email')
            }
        if(password.length==null)
            {
                alert('enter password')
            }
            await fetch(`${url}/users/login`, {
                method: "POST",
                body: JSON.stringify({
                     email:email,
                     password:password
                }),   
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((r)=>{
                if(r.data==="Invalid user")
                    {
                        alert(r.data);
                        navigate('/')
                    }
                console.log(r.data)
            })
            alert("Signin Successfull")
            navigate('/sellerpost')
      }
      catch(err)
      {
        alert("Invalid Email or Password")
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
                      
                            <h1 class="mb-4 text-1xl text-center">Sign in here!</h1>
                            <input 
                                type="email"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Email"
                                value={email} 
                                onChange={(e)=>{setemail(e.target.value)}}/>
    

                            <input 
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                placeholder="Password" 
                                value={password}
                                onChange={(e)=>{setpassword(e.target.value)}}/>
        
                            <button type="button" class="text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={HandleSubmit}>
                            Sign in</button>
        
                            <div class="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the 
                                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Terms of Service
                                </a> and 
                                <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                    Privacy Policy
                                </a>
                            </div>
                            <div class="text-center text-sm text-grey-dark mt-4">
                               <a class="underline border-b border-grey-dark text-blue-dark" onClick={()=>{navigate('/newuser')}}>
                                    Don't have account?
                                </a>
                            </div>
                        </div>
                    </div>
                </div> 
     )
}
