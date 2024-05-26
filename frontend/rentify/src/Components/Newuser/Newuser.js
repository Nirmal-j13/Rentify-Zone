import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../../url';
export const Newuser = () => {
    let navigate=useNavigate();
    const [firstname,setfirstname]=useState("");
    const [lastname,setlastname]=useState("");
    const [email,setemail]=useState("");
    const [phoneno,setphoneno]=useState("");
    const [password,setpassword]=useState("");
    
    const HandleSubmit=async(e)=>{
        try{
            e.preventDefault();
            if(firstname.length<2)
            {
                alert('length < 2')
            }
            if(lastname==null)
                {
                    alert('enter lastname')
                }
            if(email.length==null)
                {
                    alert('enter email')
                }
            if(phoneno.length==null||phoneno.length<10)
                {
                    alert('enter phoneno')
                }
                if(password.length==null)
                    {
                        alert('enter password')
                    }
            else 
            {
            await fetch(`https://rentify-zone.vercel.app/users/register`, {
                method: "POST",
                body: JSON.stringify({
                     firstname:firstname,
                     lastname:lastname,
                     email:email,
                     phoneno:phoneno,
                     password:password
                }),   
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then((data)=>{
                console.log(data)
            })
            alert("Signup Successfull")
            navigate('/')
            return(
                <div>
                {toast.success('Signup Successfull', {
            position: toast.POSITION.TOP_RIGHT
                })}
            </div>)
        }

       }
       catch(err)
       {

       }
    }

  return (
    <div class="bg-grey-lighter min-h-screen flex flex-col">
          <ToastContainer/>
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
                            placeholder="FirstName" 
                            value={firstname}
                            onChange={(e)=>{setfirstname(e.target.value)}}/>

                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="LastName" 
                            value={lastname}
                            onChange={(e)=>{setlastname(e.target.value)}}/>
    
                        <input 
                            type="email"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Email"
                            value={email} 
                            onChange={(e)=>{setemail(e.target.value)}}/>

                        <input 
                            type="text"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Phoneno" 
                            value={phoneno}
                            onChange={(e)=>{setphoneno(e.target.value)}}/>
    
                        <input 
                            type="password"
                            class="block border border-grey-light w-full p-3 rounded mb-4"
                            placeholder="Password" 
                            value={password}
                            onChange={(e)=>{setpassword(e.target.value)}}/>
    
                        <button type="button" class="text-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        onClick={HandleSubmit}>
                        Sign Up</button>
    
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
