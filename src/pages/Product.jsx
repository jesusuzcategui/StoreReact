import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams, useNavigate } from "react-router-dom";

import products from "../api";

const Product = () => {
    const { idproduct } = useParams();
    const navigate = useNavigate();
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        let filter = products.filter((f) => f._id === parseInt(idproduct));
        if (filter.length === 0) {
            return navigate('/404');
        }
        console.log(filter);
        let currentPro = filter[0];
        setCurrentProduct(currentPro);
    }, []);

    const ContainerCenter = styled.div`
        width: 100%;
        max-width: 1200px;
        margin: 1rem auto;
    `;

    const ProductRowTop = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        columns-gap: 1rem;
    `;

    const ProductImage = styled.div`
        max-width: 500px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;

        & img {
            padding-bottom: 100%;
            padding-left: 0;
            object-fit: fill;
            object-position: center;
            width: 100%;
            height: 100%;
        }
    `;

    const ProductInfo = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & .productCat {
            color: #B3080A;
            font-size: 1.5rem;
        }

        & .productName {
            color: #000;
            font-size: 3rem;
            margin: 0;
        }

        & .productDescription {
            color: #6F7482;
            font-size: 1.2rem;
            text-align: left;
            line-height: 1.5;
        }

        & .productPrice {
            font-size: 2.5rem;
        }
    `;

    const numberFormat = (value) =>
        new Intl.NumberFormat('en-ES', {
            style: 'currency',
            currency: 'COP'
        }).format(value);

    return (
        <>
            {(currentProduct) && (
                <ContainerCenter>
                    <ProductRowTop>
                        <ProductImage>
                            <img src={currentProduct.image} alt="Imagen del prducto" />
                        </ProductImage>
                        <ProductInfo>
                            <span className="productCat">{currentProduct.category}</span>
                            <h3 className="productName">{currentProduct.name}</h3>
                            <div className="productDescription">{currentProduct.description}</div>
                            <div className="productPrice">{numberFormat(currentProduct.price)}</div>
                        </ProductInfo>
                    </ProductRowTop>
                </ContainerCenter>
            )}
        </>
    );
};

export default Product;