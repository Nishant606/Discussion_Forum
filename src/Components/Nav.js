import React from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Styles/Nav.module.css'

const Nav =  () =>{
    return (
        <div className={Styles.nav}>
                
            <h1>Discussion Forum</h1>
            <Link to={`createPost`} exact>
            <button className={Styles.button}><b>Create Discusion</b></button>
            </Link>
        </div>
    )
}
export default Nav;