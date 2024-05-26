import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { url } from '../../url';
export const Sellerpost = () => {
    const[search,setSearch]=useState("");
    const[Seller,setSeller]=useState([]);
    const Deleteform=async(id)=>{
        window.location.reload(true);
        await fetch(`${url}/seller/sellerdelete/${id}`, {
            method: 'DELETE',
          })
          .then(res => res.text())
          .then(res => console.log(res))
    }
    useEffect(() => {
        fetch(
           `${url}/seller/sellerdisplay`
       ).then((res) => {
          console.log(res.json()
          .then((d)=>
          {
           console.log(d);
           setSeller(d.data);
          }
       ))})},[]);
  return (
    <div>
         <nav class="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rentify Zone</span>
    </Link>
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to="/sellernewpost" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            New Post</button>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>  
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm mt-5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Search the Items" required
        onChange={(e) => {
            setSearch(e.target.value);
        }}/>
    </div>
</form> 
<div class="mt-10 relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Place
                </th>
                <th scope="col" class="px-6 py-3">
                    Area
                </th>
                <th scope="col" class="px-6 py-3">
                    No of Bedrooms
                </th>
                <th scope="col" class="px-6 py-3">
                    No of Bathrooms
                </th>
                <th scope="col" class="px-6 py-3">
                    Hospitals
                </th>
                <th scope="col" class="px-6 py-3">
                    College Nearby
                </th>
                <th scope="col" class="px-6 py-3">
                    Update / Delete
                </th>
            </tr>
        </thead>
        <tbody>
        {Seller
            .filter((val) => {
                        return val.place.toLowerCase().includes(search.toLowerCase());
                    })
                    .map((val, id) => {
                        //const appid=val._id;
                        return (
                <>
                <tr class=" bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {new String(val._id).substring(0,8)}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {val.place}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {val.area}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {val.noofbed}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {val.noofbath}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {val.hospitals}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {val.collegenearby}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link to={"/sellerupdatepost/"+val._id}
                   class="relative mr-4 rounded px-5 py-2.5 overflow-hidden group bg-blue-500 relative hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300"
>
<span class="absolute right-0 w-5 h-32-mt-12 transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Update</span>
</Link>
<button  onClick={()=>Deleteform(val._id)}  class="relative rounded px-5 py-2.5 overflow-hidden group bg-red-500 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300">
<span class="absolute right-0 w-5 h-32 -mt-12 transition-all duration-1000 transform translate-x-12  rotate-12 group-hover:-translate-x-40 ease"></span>
<span class="relative">Delete</span>
</button>
                </th>
            </tr>
            </>
            );
                        }
                    )
}
                    
        </tbody>
    </table>
</div>

    </div>
    </div>
  )
}
