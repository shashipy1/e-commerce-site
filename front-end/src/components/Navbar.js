import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

const Navbar = ({ username }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const showSignupButton = currentPath !== '/signup';
    const showLoginButton = currentPath !== '/login';

    const handleLogout = () => {
        localStorage.removeItem('token'); 
    };
    return (
        <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        <h2>Mobile Marketplace</h2>
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                {username ? (
                    <div>Welcome, {username}!
                    <ButtonContainer onClick={handleLogout}>logout</ButtonContainer>
                    </div>
                    
                ) : (
                    <>
                        {showSignupButton && (
                            <ButtonContainer>
                                <Link to="/signup" style={{ textDecoration: 'none' }}>
                                    Signup
                                </Link>
                            </ButtonContainer>
                        )}
                        {showLoginButton && (
                            <ButtonContainer>
                                <Link to="/login" style={{ textDecoration: 'none' }}>
                                    Login
                                </Link>
                            </ButtonContainer>
                        )}
                    </>
                )}
                <ButtonContainer>
                    <i className="fas fa-cart-plus">my cart</i>
                </ButtonContainer>
            </Link>
        </NavWrapper>
    );
}

export default Navbar;

const NavWrapper = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size:1.3 rem;
        text-transform:capitalize;
    }
`;
