import React from 'react';
import styled from 'styled-components';
import products from '../api';
import GridProducts from '../components/GridProducts';

const ContainerCenter = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
`;

const Home = () => {
    return (
        <>
            <h1>My Store cute 😍</h1>
            <ContainerCenter>
                <GridProducts products={products} />
            </ContainerCenter>
        </>
    );
};

export default Home;