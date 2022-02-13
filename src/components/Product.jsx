import React from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: solid 1px #ccc;
    background: #fff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
`;

const ProductName = styled.a`
    display: block;
    text-decoration: none;
    color: #2d2d2d;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: center;
`;

const ProductButon = styled.button`
    width: 100%;
    max-width: 90%;
    margin: .5rem auto;
    border: solid 1px #333;
    border-radius: 5px;
    background: rgb(162,162,162);
    background: linear-gradient(0deg, rgba(162,162,162,1) 0%, rgba(119,119,119,1) 100%);
    cursor: pointer;
    transition: all ease .3s;
    color: #fff;

    &:hover {
        background: rgb(119,119,119);
        background: linear-gradient(0deg, rgba(119,119,119,1) 0%, rgba(162,162,162,1) 100%);
    }
`;

const Product = ( { id, name, ammout, image, addtocart } ) => {
    return (
        <>
            <ProductWrapper id={id}>
                <ProductImage src={image} />
                <ProductName>{name}</ProductName>
                <ProductButon onClick={() => addtocart()}>Add</ProductButon>
            </ProductWrapper>
        </>
    );
};

export default Product;