import React from "react";
import originalLogo from '../../assets/logos/transparent_logo.png';
import { Container, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import './style.css'

const Header = (props) => {
    const location = useLocation();
    const pathName = location.pathname
    let navBar;

    return (
        <header>
            <Container maxWidth="xl" style={{ marginTop: "30px" }}>
                <Grid container justify="space-between" alignItems="center" spacing={4}>
                    <Grid item xs={12} sm={7} lg={9} className="logoContainer">
                        <img className="headerImage" src={originalLogo} alt="Life at Home Logo: orange and light green outline of an A-frame house"></img>
                        <h1 className="logo-text">Life at Home</h1>

                    </Grid>
                    <Grid className="navBar" item xs={12} sm={4} lg={3}>
                        <ul className="navList">
                            <li><p><NavLink exact activeStyle={{textDecoration: "underline"}} to="/">Home</NavLink></p></li>
                            <li><p><NavLink exact activeStyle={{textDecoration: "underline"}} to="/services">Services</NavLink></p></li>
                            <li><p><NavLink exact activeStyle={{textDecoration: "underline"}} to="/blog">Blog</NavLink></p></li>
                            <li><p><NavLink exact activeStyle={{textDecoration: "underline"}} to="/contact">Contact</NavLink></p></li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </header>
    )
}

export default Header;
