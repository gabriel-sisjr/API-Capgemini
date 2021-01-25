import styled from 'styled-components';

export const ContainerImportacao = styled.div`
    margin: 0 auto;
    max-width: 700px;
    border: 3px solid #0070AD;
    padding: 2rem;
    margin-top: 3rem;
    .container-itens{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button{
        margin-top: 3rem;
        background-color: #80CFF7;
        width: 100px;
        height: 50px;
        border: none;
        outline: none;
        color: #ffffff;
        cursor: pointer;
        :hover{
            background-color: #0070AD; 
            transition: all 1s ease;
        }
    }
    h1{
        color: #0070AD;
    }
    .arquivo-box{
        background: #ffffff;
        font-size: 16px;
        border-radius: 50px;
        box-shadow: 5px 5px 10px #b5a9a9;
        width: 430px;
        outline: none;
        ::-webkit-file-upload-button{
            color: white;
            background-color: #80CFF7;
            padding: 20px;
            border: none;
            border-radius: 50px; 
            box-shadow: 1px 0 1px 1px #b5a9a9;
            outline: none;
        }
        ::-webkit-file-upload-button:hover{
            transition: all 1s ease;
            background-color: #0070AD;
        }
    }
`