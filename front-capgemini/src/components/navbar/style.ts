import styled from 'styled-components';

export const ContainerNavbar = styled.div`
    width: 100%;
    background-color: #80cff7;
    display: flex;
    flex-direction: row;
    padding: 2rem;

    a{
        text-decoration: none;
        color: #ffffff;
        font-weight: bold;
        font-size: 15px;
        margin-right: 1rem;
        :hover{
            color: #0070AD;
        }
    }
`

export const ContainerConteudoNavbar = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`