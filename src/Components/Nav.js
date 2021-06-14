import React from 'react';
import { Link } from 'react-router';
import Styles from '../Styles/Nav.module.css'

const Nav =  () =>{
    return (
        <div className={Styles.nav}>
            <div></div>
            <h1>Discussion Forum</h1>
            
            <button className={Styles.button}><b>Create Discusion</b></button>
        </div>
    )
}
export default Nav;