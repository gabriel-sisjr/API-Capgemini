import styled from 'styled-components';

export const ContainerTabs = styled.div<{ aberto: boolean }>`
    background-color: #0070ad;
    border-radius: 12px;
    transition: all 0.3s ease;
    height: ${props => props.aberto ? '100%' : '50px'};
    .props-tab{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        padding: 1rem;
        color: #ffffff;
        border-bottom: 1px solid #ffffff;
    }
    .container-table{
        padding: 1rem;
        opacity: ${props => props.aberto ? 1 : 0};
    }
    table{
        margin: 0 auto;
        border: 1px solid #ffffff;
        padding: 1rem;
    }
    th,td{
        color: #ffffff;
    }
    svg{
        cursor: pointer;
    }
    @keyframes down {
        0% {
           opacity: 0;
        }
        50% {
           opacity: 0.5;
        }
        100%{
            opacity: 1;
        }
    }
`