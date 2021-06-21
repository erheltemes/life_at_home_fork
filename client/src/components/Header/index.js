import React from "react";
import transparentLogo from '../../assets/logos/transparent_logo.png';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './style.css'

const Header = (props) => {
    const location = useLocation();
    const pathName = location.pathname
    let navBar;
    console.log(pathName)

    if (pathName === '/') {
        navBar =
            <ul className="navList">
                <li><p><NavLink exact to="/blog">Blog</NavLink></p></li>
                <li><p><NavLink exact to="/services">Services</NavLink></p></li>
            </ul>
    } else if (pathName === '/services') {
        navBar =
            <ul className="navList">
                <li><p><NavLink exact to="/">Home</NavLink></p></li>
                <li>
                    <div className="dropdown">
                        <button className="dropbtn">Services</button>
                        <div className="dropdown-content">
                            <a href="#smarthome">Smart Home </a>
                            <a href="#">Accessibility </a>
                            <a href="#">Sustainability </a>
                        </div>
                    </div>
                </li>
            </ul>
    } else if (pathName === '/blog') {
        navBar =
            <ul className="navList">
                <li><p><NavLink exact to="/">Home</NavLink></p></li>
                <li>
                    <li><p><NavLink exact to="/services">Services</NavLink></p></li>

                </li>
            </ul>
    } else {
        navBar =
            <ul className="navList">
                <li><p><NavLink exact to="/">Home</NavLink></p></li>
                <li>
                    <li><p><NavLink exact to="/services">Services</NavLink></p></li>

                </li>
                <li><p><NavLink exact to="/blog">Blog</NavLink></p></li>

            </ul>
    }

    return (
        <header>
            <Container maxWidth="xl" style={{ marginTop: "30px" }}>
                <Grid container justify="space-between" alignItems="center" spacing={4}>
                    <Grid item xs={12} sm={7} lg={9} className="logoContainer">
                        <img className="headerImage" src={transparentLogo} alt="Life at Home Logo: orange and light green outline of an A-frame house"></img>
                        {/* <h1 className="logo-text">{siteData[0].company_name}</h1> */}

                    </Grid>
                    <Grid className="navBar" item xs={12} sm={4} lg={3}>
                        {navBar}
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header;