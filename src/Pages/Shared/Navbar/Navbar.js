import React from 'react';
import './Navbar.css'
import Tada from 'react-reveal/Tada';
import Jump from 'react-reveal/Jump';
import { BiHomeHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user)

    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><a href='/home' className='text-4xl'> <BiHomeHeart></BiHomeHeart> </a></li>
        <li><a>BANGLE</a></li>
        <li><a>RING</a></li>
        <li><a>EARRING</a></li>
        <li tabindex="0">
            <a class="justify-between">
                LINGERIE
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </a>
            <ul class="p-2">
                <li><a>Bra</a></li>
                <li><a>Panty</a></li>
                <li><a>Nighty</a></li>
            </ul>
        </li>
        <li><a>PENDENT</a></li>
        <li><a>NOSE-PIN</a></li>
        <li><a>CHAIN</a></li>

        <li>
            {
                user ?
                    <button onClick={logout} className='btn btn-accent'>SignOut</button>
                    : <Link to='/login'>Login</Link>
            }
        </li>

    </>

    return (
        <div className=' font-bold h-full' style={{ "backgroundColor": "#f2c9e0" }}>
            <div class="navbar  flex flex-col" >
                <div class="navbar-end flex justify-center">
                    <div class="dropdown" >
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">

                            {menuItems}

                        </ul>
                    </div>
                    <div className=''>
                        <a class="btn btn-ghost normal-case text-4xl">Easy-Shopping</a>
                    </div>
                </div>

                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">


                        {menuItems}

                    </ul>
                </div>
            </div>
            {/* search............... */}
            <div className='flex justify-end  pr-5 '>
                <div class="form-control my-3 w-1/3">
                    <div class="input-group w-1/3 ">
                        <div className='flex '>
                            <select class="select select-bordered ">
                                <option disabled selected>Pick category</option>
                                <option>T-shirts</option>
                                <option>Mugs</option>
                                <option>Mugs</option>
                                <option>Mugs</option>
                                <option>Mugs</option>
                                <option>Mugs</option>
                                <option>Mugs</option>

                            </select>
                            <div>
                                <button class="btn font-bold">Go</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;