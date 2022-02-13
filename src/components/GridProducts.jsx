import React from 'react';
import styled from 'styled-components';

import Product from './Product';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
`;

const GridProducts = ( { products } ) => {

    const mapProducts = products.map( (item, i) => {
        return (
            <div key={i}>
                <Product id={item._id} name={item.name} image={item.image} ammout={item.price} />
            </div>
        );
    });

    return (
        <>
            <GridWrapper>
                {mapProducts}
            </GridWrapper>
        </>
    );
};

export default GridProducts;