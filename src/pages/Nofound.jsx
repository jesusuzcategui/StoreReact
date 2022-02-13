import React from "react";
import styled from "styled-components";

const ContainerCenter = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
    height: calc(100vh - 112px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TitleStaticpage = styled.h2`
    text-align: center;
`;

const Nofound = () => {
    return (
        <>
            <ContainerCenter>
                <TitleStaticpage>
                    Producto no encontrado
                </TitleStaticpage>
            </ContainerCenter>
        </>
    );
};

export default Nofound;
