import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className='w-full fixed top-0 right-0 bg-black shadow-2xl p-8 text-white flex justify-between items-center '>
            <h1 className=" font-bold text-[2rem]">BANK</h1>
            <ul className='flex space-x-10 text-lg'>
                <Link to='/'>
               <li>Home</li>
               </Link>
               <Link to='/Depense'>
                <li>depense</li>
                </Link>
                
            </ul>
            
        </header>
    );
};

export default Header;