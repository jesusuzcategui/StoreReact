import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavbarInner = styled.header`
    background: #f1f1f1;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
`;

const NavbarContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

const NavbarMenu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center ;
    width: 30%;
    flex: 0 0 30%;

    & .navbarItem {
        text-decoration: none;
        color: #2d2d2d;
        width: 100%;
        border-radius: 5px;
        padding: 10px 15px;
        transition: all ease .5s;

        &:hover {
            background: #484848;
            color: #f1f1f1;
        }
    }
`;

const NavbarLogo = styled.div`
    width: 20%;
    flex: 0 0 20%;
    font-size: 1.5rem;
    color: #484848;
`;

const NavbarCTACart = styled.button`
    background-color: #2d2d2d;
    color: white;
    border: none;
    outline: none;
    font-size: 1rem;
    width: 30px;
    height: 30px;   
    cursor: pointer;
`;


const CartSidebar = styled.div`
    width: 100%;
    max-width: 280px;
    height: 100vh;
    background: #cccccc;
    position: fixed;
    right: ${(props) => {
        return (props.showCart === true) ? '0px' : '-100%';
    }};
    top: 0;
    transition: all ease .5s;
`;

const CartSidebarClose = styled.button`
    background-color: #2d2d2d;
    color: white;
    text-align: center;
    width: 30px;
    height: 30px;
    border: none;
    outline: none;
    cursor: pointer;
`;

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {

    }, [showCart]);

    const toggleCart = () => {
        setShowCart(true);
    };

    const closeCart = () => {
        setShowCart(false);
    };

    return (
        <>
            <NavbarInner>
                <NavbarContainer>
                    <NavbarLogo>
                        <span>MyStore</span>
                    </NavbarLogo>
                    <NavbarMenu>
                        <Link className='navbarItem' to="/">Home</Link>
                        <Link className='navbarItem' to="/">All products</Link>
                        <NavbarCTACart onClick={() => toggleCart()}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </NavbarCTACart>
                    </NavbarMenu>
                </NavbarContainer>
            </NavbarInner>
            <CartSidebar showCart={showCart}>
                <CartSidebarClose onClick={() => closeCart()}>
                    <FontAwesomeIcon icon={faClose} />
                </CartSidebarClose>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat iusto labore sunt voluptatem quidem, odio similique! Vero blanditiis atque mollitia minus laboriosam, placeat omnis, et aut quis illum est tempore.</p>
            </CartSidebar>
        </>
    );
};

export default Navbar;