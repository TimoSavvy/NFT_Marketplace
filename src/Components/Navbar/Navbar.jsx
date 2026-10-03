
import Styles from './Navbar.module.css'
import "tailwindcss";
import images from '../../img/index'
import React , {useEffect, useState} from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdNotification } from 'react-icons/md'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'
import Discover from './Discover/Discover';
import Help from './Help/Help';
import Notification from './Notification/Notifiaction';
import Profile from './Profile/Profile';


export default function Navbar() {

    return (
        <div className="navbar">
            <div className="Container">
                <div className="containerLeft">
                    <div className="logo">
                        <img src={images.logo} alt="SavvyNFT" width={100} height={100} />
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Search NFTs..." />
                        <BsSearch onClick={() => {}} className="searchIcon" />
                    </div>
                </div>
                <div className="containerRight">
                    <div className="navLinks">

                        <div className="navLink" onClick={() => setDiscover(!Discover)}>
                            <span>Discover</span>
                            {Discover && (
                                <div className="dropdown">
                                    <ul>
                                        <li><a href="/trending">Trending</a></li>
                                        <li><a href="/new">New</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        
                        <div className="navLink" onClick={() => setHelp(!Help)}>
                            <span>Help Center</span>
                            {Help && (
                                <div className="dropdown">
                                    <ul>
                                        <li><a href="/faq">FAQ</a></li>
                                        <li><a href="/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                         
                        <div className="navLink" onClick={() => setNotification(!Notification)}>
                            <span>Notification</span>
                            {Notification && (
                                <div className="dropdown">
                                    <ul>
                                        <li><a href="/notifications">View All</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        create button
                        <div className="navLink">
                            <button className="createButton">Create</button>
                        </div>
                        profile button
                        <div className="navLink" onClick={() => setProfile(!Profile)}>
                            <img src={images.user1} alt="Profile" width={40} height={40} />
                            <span>Profile</span>
                            {Profile && (
                                <div className="dropdown">
                                    <ul>
                                        <li><a href="/profile">View Profile</a></li>
                                        <li><a href="/settings">Settings</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        menubar toggle button
                        <div className="navLink" onClick={() => setToggleMenu(!ToggleMenu)}>
                            icon
                            <svg className="icon" role="presentation" aria-hidden="true">
                                <use href="/icons.svg#menu-icon"></use>
                            </svg>
                            <span>Menu</span>
                    </div>
                        Sidebar toggle button
                        <div className="navLink" onClick={() => setToggleDrawer(!ToggleDrawer)}>
                            icon
                            <svg className="icon" role="presentation" aria-hidden="true">
                                <use href="/icons.svg#drawer-icon"></use>
                            </svg> 
                            <span>Menu</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    ) 
} 
 