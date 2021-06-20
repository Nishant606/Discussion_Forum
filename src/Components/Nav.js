import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Styles from '../Styles/Nav.module.css'

const Nav = () => {
    return ( 
        <div className={Styles.nav}>
            <Link to={`/`} className={Styles.item1}><h1>Discussion Forum</h1></Link>
            <div className={Styles.searchbar}>
            </div>
            <Link to={`createPost`} className={Styles.item2} exact>
            <button className={Styles.button}><b>Create Discusion</b></button></Link>
        </div>
        
    )
}
export default Nav